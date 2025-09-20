const Book = require('../models/book')
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: 'List of books fetch successfully',
        data: allBooks
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'no books found in collection',
      })
    }
  } catch (e) {
    console.log('error while getting all books', e)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again.',
    })
  }

}

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID)
    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message: 'book with the current Id is not found! please try with a different id'
      })
    }
    res.status(200).json({
      success: true,
      message: 'Getting a single Book successfully',
      data: bookDetailsByID
    })

  }
  catch (e) {
    console.log('error while getting a single book', e)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again.',
    })
  }
}

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: 'Book added',
        data: newlyCreatedBook,
      })
    }
  }
  catch (e) {
    console.log('error while adding a book', e)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again.',
    })
  }
}

const updateSingleBook = async (req, res) => {
  try {
    const updatedBookData = req.body;
    const bookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(bookId, updatedBookData, { new: true })
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: 'book with the current Id is not found! please try with a different id.'
      })
    }
    res.status(200).json({
      success: true,
      message: 'updated book with current Id.',
      data: updatedBook
    })

  } catch (e) {
    console.log('s');
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again.',
    })
  }
}

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: 'book with the current Id is not found! please try with a different id'
      })
    }
    res.status(200).json({
      success: true,
      message: 'book with current Id is deleted',
      data: deletedBook
    })

  } catch (e) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again.'
    })
  }
}

module.exports = { getAllBooks, getSingleBookById, addNewBook, updateSingleBook, deleteBook }