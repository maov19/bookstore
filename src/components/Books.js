import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBook,
  deleteBook,
  fetchBooks,
  selectBooks,
} from '../redux/books/booksSlice';

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
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.category}</p>
          <DeleteBook itemId={book.id} />
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="author">
          Author:
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </label>
      </div>
      <button type="submit">Create Book</button>
    </form>
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
