import { connectToDatabase } from "@/lib/db";


export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { username, password } = req.body;
    const db = await connectToDatabase();
    const users = db.collection('users');

    const user = await users.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    return res.status(200).json({ 
      success: true,
      user: {
        username: user.username
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}