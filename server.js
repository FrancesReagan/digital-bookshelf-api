// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db/connection.js';
import bookRoutes from './routes/bookRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/user', userRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({ message: 'Successfully connected to the database!' });
});

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
}).catch((err) => {
  console.error(`Failed to start server: ${err}`);
});