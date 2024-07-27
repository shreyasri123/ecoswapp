// pages/api/match.js
import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { itemId } = req.body;

      // Find the item by ID
      const item = await Item.findById(itemId);

      if (!item) {
        return res.status(404).json({ success: false, message: 'Item not found' });
      }

      // Find matching items (items in the same category and location)
      const matches = await Item.find({
        _id: { $ne: itemId }, // Exclude the item itself
        category: item.category,
        location: item.location,
      });

      return res.status(200).json({ success: true, data: matches });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
