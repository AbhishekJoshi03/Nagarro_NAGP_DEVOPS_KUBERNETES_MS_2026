require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./dataBase');
const booksRouter = require('./routes/books');

app.use(express.json());

async function start() {
  try {
    await db.init();
    app.use('/api/books', booksRouter);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start app:', err);
    process.exit(1);
  }
}

start();
