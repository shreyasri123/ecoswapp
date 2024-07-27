// pages/api/items/index.js
import dbConnect from '../../../utils/dbConnect';
import Item from '../../../models/Item';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      const items = await Item.find({});
      res.status(200).json({ success: true, data: items });
      break;
    case 'POST':
      const item = await Item.create(req.body);
      res.status(201).json({ success: true, data: item });
      break;
    // Add other cases for PUT, DELETE if needed
  }
}
