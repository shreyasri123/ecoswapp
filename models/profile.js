// pages/profile.js
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import dbConnect from '../utils/dbConnect';
import User from '../models/User';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        await dbConnect();
        const userDoc = await User.findOne({ email: currentUser.email }).populate('items');
        setUser(userDoc);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <h2>Items</h2>
      <ul>
        {user.items.map(item => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}