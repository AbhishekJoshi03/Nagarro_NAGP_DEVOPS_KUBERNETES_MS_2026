# Books API (Node + MySQL)

Small Node.js Express API that creates a MySQL database/table on startup and seeds 15 book records.

Quick setup

1. Copy `.env.example` to `.env` and update DB credentials.
2. Install dependencies:

```bash
npm install
```

3. Start the app:

```bash
npm start
```

The server exposes the books routes under `/api/books`:
- `GET /api/books` — list all books
- `GET /api/books/:id` — get book by id
- `POST /api/books` — create book (JSON body)
- `PUT /api/books/:id` — update book
- `DELETE /api/books/:id` — delete book

Notes
- Default DB settings assume a local MySQL 8 server. Update `.env` to match your environment.
- The app will create the database (default `books_db`), the `books` table and insert 15 records if table is empty.
