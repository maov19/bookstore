import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import BookList from './Books';
import { addBook } from '../redux/books/booksSlice';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) {
      setBooks(storedBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    const title = e.target.bookName.value;
    const author = e.target.authorName.value;
    const newBook = { title, author };
    dispatch(addBook(newBook));
    e.target.reset();
  };

  return (
    <div>
      <h1>Home</h1>
      <BookList />
      <form id="create-book" onSubmit={addBookHandler}>
        <input className="book-name" name="bookName" placeholder="Insert book here" />
        <input className="author-name" name="authorName" placeholder="Insert author here" />
        <button type="submit">Add new book</button>
      </form>
    </div>
  );
};

export default Home;
