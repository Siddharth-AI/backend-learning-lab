const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

let books = [
  {
    id: 1,
    title: '1984',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
  },
  {
    id: 3,
    title: 'The Great Gatsby',
  },
];

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Book API',
    version: '1.0.0',
  })
})

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
})

// Get a book by ID
app.get('/books/:id', (req, res) => {
  const bookid = parseInt(req.params.id);
  const book = books.find(b => b.id === bookid);
  if (book) {
    res.status(200).json(book);
  }
  else {
    res.status(404).json({ messange: 'Book not found' });
  }
})

// Create a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: (Math.floor(Math.random() * 1000)), // Random ID for simplicity
    title: `book ${Math.floor(Math.random() * 1000)}`,
  }
  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: 'Book created successfully',
  })
})

// Update a book by ID
app.put('/update/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const findCurrentBook = books.find(b => b.id === bookId);
  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;
    res.status(200).json({
      message: 'Book updated successfully',
      data: findCurrentBook,
    })
  }
  else {
    res.status(404).json({ message: 'Book not found' });
  }
})

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);
  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1);
    res.status(200).json({
      message: 'Book deleted successfully',
      data: deletedBook[0],
    })
  }
  else {
    res.status(404).json({
      message: 'Book not found',
    })
  }
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});