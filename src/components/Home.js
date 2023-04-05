import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookList from './Books';
import { addBook, removeBook } from '../redux/books/booksSlice';

const Home = () => {
  const [books, setBooks] = useState([]);

  const bookList = useSelector((state) => state.books);

  useEffect(() => {
    setBooks(bookList);
    localStorage.setItem('books', JSON.stringify(bookList));
  }, [bookList]);

  const dispatch = useDispatch();

  const addBookButton = (e) => {
    e.preventDefault();
    const title = e.target.bookName.value;
    const author = e.target.authorName.value;
    const newBook = { title, author, id: Math.random().toString(36).substr(2, 9) };
    dispatch(addBook(newBook));
    e.target.reset();
  };
/* eslint-disable */
  function RemoveBookButton({ bookId }) {
    const dispatch = useDispatch();

    const removeBookHandler = () => {
      dispatch(removeBook(bookId));
    };

    return <button type="button" onClick={removeBookHandler}>Remove Book</button>;
  }

  return (
    <div>
      <h1>Home</h1>
      <BookList>
        {books.map((book) => (
          <div key={book.id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <RemoveBookButton bookId={book.id} />
          </div>
        ))}
      </BookList>
      <form id="create-book" onSubmit={addBookButton}>
        <input className="book-name" name="bookName" placeholder="Insert book here" />
        <input className="author-name" name="authorName" placeholder="Insert author here" />
        <button type="submit">Add new book</button>
      </form>
    </div>
  );
};

export default Home;
