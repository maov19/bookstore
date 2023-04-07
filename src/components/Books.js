import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBook,
  deleteBook,
  fetchBooks,
  selectBooks,
} from '../redux/books/booksSlice';

import '../styles/booksStyles.css';
import progress from '../images/progress-bar.PNG';

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
    <div className="book-container flex">
      {books.map((book) => (
        <div className="single-book flex" key={book.id}>
          <div className="book-info">
            <p className="book-category montserrat">Action</p>
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">John Williams</p>
            <div className="book-buttons flex">
              <button type="button" className="single-book-button">Comments</button>
              <DeleteBook className="single-book-button" itemId={book.id} />
              <button type="button" className="single-book-button">Edit</button>
            </div>
          </div>
          <div className="completed flex reset">
            <img src={progress} alt="completion" />
            <div className="completed-data flex reset">
              <h2 className="percentage montserrat reset">75%</h2>
              <h3 className="completed-status montserrat reset">Completed</h3>
            </div>
            <div className="separator" />
          </div>
          <div className="current flex">
            <h3 className="current-title">CURRENT CHAPTER</h3>
            <h3 className="current-chapter">Chapter 17</h3>
            <button type="button" className="current-button">UPDATE PROGRESS</button>
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
      <hr width="100%" />
      <h2 className="montserrat">ADD NEW BOOK</h2>
      <div className="add-book-items">
        <form className="add-form flex" onSubmit={handleSubmit}>
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
    <button onClick={handleDeleteBook} type="button" className="single-book-button">
      Delete
    </button>
  );
}

DeleteBook.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export { CreateBook, DeleteBook, DisplayBooks };
