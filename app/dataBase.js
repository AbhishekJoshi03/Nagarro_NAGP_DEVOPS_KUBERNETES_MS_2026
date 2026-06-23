const mysql = require('mysql2/promise');
require('dotenv').config();

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || 'books_db';

let pool;

async function init() {
  // create database if not exists
//   const tmpConn = await mysql.createConnection({ host: DB_HOST, user: DB_USER, password: DB_PASSWORD });
//   await tmpConn.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
//   await tmpConn.end();

  pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  // create table if not exists
//   await pool.query(
//     `CREATE TABLE IF NOT EXISTS books (
//       id INT PRIMARY KEY AUTO_INCREMENT,
//       title VARCHAR(255) NOT NULL,
//       author VARCHAR(255) NOT NULL,
//       published_year INT,
//       genre VARCHAR(100)
//     ) ENGINE=InnoDB;`
//   );

  // seed 15 records if table empty
//   const [rows] = await pool.query('SELECT COUNT(*) AS cnt FROM books');
//   const cnt = rows[0].cnt || 0;
//   if (cnt === 0) {
//     const books = [
//       ['To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction'],
//       ['1984', 'George Orwell', 1949, 'Dystopian'],
//       ['Pride and Prejudice', 'Jane Austen', 1813, 'Romance'],
//       ['The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Fiction'],
//       ['Moby Dick', 'Herman Melville', 1851, 'Adventure'],
//       ['War and Peace', 'Leo Tolstoy', 1869, 'Historical'],
//       ['The Catcher in the Rye', 'J.D. Salinger', 1951, 'Fiction'],
//       ['The Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasy'],
//       ['Fahrenheit 451', 'Ray Bradbury', 1953, 'Dystopian'],
//       ['Jane Eyre', 'Charlotte Brontë', 1847, 'Romance'],
//       ['Brave New World', 'Aldous Huxley', 1932, 'Dystopian'],
//       ['Crime and Punishment', 'Fyodor Dostoevsky', 1866, 'Psychological'],
//       ['The Odyssey', 'Homer', -800, 'Epic'],
//       ['The Brothers Karamazov', 'Fyodor Dostoevsky', 1880, 'Philosophical'],
//       ['The Alchemist', 'Paulo Coelho', 1988, 'Fiction']
//     ];

//     await pool.query('INSERT INTO books (title, author, published_year, genre) VALUES ?', [books]);
//     console.log('Seeded 15 book records into database');
//   }
}

function getPool() {
  if (!pool) throw new Error('Pool not initialized. Call init() first.');
  return pool;
}

module.exports = { init, getPool };
