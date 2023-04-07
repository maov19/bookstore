/* eslint-disable */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBook,
  deleteBook,
  fetchBooks,
  selectBooks,
} from '../redux/books/booksSlice';

import '../styles/booksStyles.css'

function DisplayBooks() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (!Array.isArray(books)) {
    return null; // or render a loading indicator
  }

  return (
    <div className="book-container">
        {books.map((book) => (
          <div className="single-book" key={book.id}>
            <div className="book-info">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.category}</p>
              <div className="book-buttons">
                <button>Comments</button>
                <DeleteBook itemId={book.id} />
                <button>Edit</button>
            </div>
            </div>
            <div className="completed">
              <h2>50%</h2>
              <h3>Completed</h3>
            </div>
            <div className="current">
              <h3>Current Chapter</h3>
              <h3>Chapter 17</h3>
              <button>Update progress</button>
            </div>
          </div>
        ))}
    </div>
  );
}

function CreateBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookData = {
      title,
      author,
      category,
      id: Date.now().toString(), // add unique ID
    };
    dispatch(createBook(bookData));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="add-book">
      <h2>ADD NEW BOOK</h2>
      <div className="add-book-items">
        <form className="add-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">
              <input
                id="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Book title"
              />
            </label>
          </div>
          <div>
            <label htmlFor="author">
              <input
                type="text"
                id="author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                placeholder="Author"
              />
            </label>
          </div>
            <select name="category" id="category-select">
              <option value="mystery">Category</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Science Fiction</option>
            </select>
          <button type="submit">ADD BOOK</button>
        </form>
      </div>

    </div>
  );
}

function DeleteBook({ itemId }) {
  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(deleteBook(itemId));
  };

  return (
    <button onClick={handleDeleteBook} type="button">
      Delete Book
    </button>
  );
}

DeleteBook.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export { CreateBook, DeleteBook, DisplayBooks };
