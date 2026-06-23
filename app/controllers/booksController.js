const { getPool } = require('../dataBase');

async function getAll(req, res) {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM books');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// async function getById(req, res) {
//   try {
//     const pool = getPool();
//     const [rows] = await pool.query('SELECT * FROM books WHERE id = ?', [req.params.id]);
//     if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
//     res.json(rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// async function createBook(req, res) {
//   try {
//     const { title, author, published_year, genre } = req.body;
//     const pool = getPool();
//     const [result] = await pool.query(
//       'INSERT INTO books (title, author, published_year, genre) VALUES (?, ?, ?, ?)',
//       [title, author, published_year || null, genre || null]
//     );
//     const [rows] = await pool.query('SELECT * FROM books WHERE id = ?', [result.insertId]);
//     res.status(201).json(rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// async function updateBook(req, res) {
//   try {
//     const { title, author, published_year, genre } = req.body;
//     const pool = getPool();
//     await pool.query(
//       'UPDATE books SET title = ?, author = ?, published_year = ?, genre = ? WHERE id = ?',
//       [title, author, published_year || null, genre || null, req.params.id]
//     );
//     const [rows] = await pool.query('SELECT * FROM books WHERE id = ?', [req.params.id]);
//     if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
//     res.json(rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// async function deleteBook(req, res) {
//   try {
//     const pool = getPool();
//     const [result] = await pool.query('DELETE FROM books WHERE id = ?', [req.params.id]);
//     if (result.affectedRows === 0) return res.status(404).json({ error: 'Not found' });
//     res.status(204).end();
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// module.exports = { getAll, getById, createBook, updateBook, deleteBook };
module.exports = { getAll };
