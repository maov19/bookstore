/* eslint-disable */
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

function Book({ book }) {
  return (
    <div>
      <li>
        {book.title}
        {' '}
        by
        {' '}
        {book.author}
        <RemoveBook bookId={book.item_id} />
      </li>
    </div>
  );
}

function NewBook() {
  const dispatch = useDispatch();

  const addBookButton = (e) => {
    e.preventDefault();
    const title = e.target.bookName.value;
    const author = e.target.authorName.value;
    // const newBook = { title, author, id: uuidv4() };
    const newBook = { title, author, item_id: uuidv4() };
    dispatch(addBook(newBook));
    e.target.reset();
  };

  return (
    <div>
      <form id="create-book" onSubmit={addBookButton}>
        <input className="book-name" name="bookName" placeholder="Insert book here" />
        <input className="author-name" name="authorName" placeholder="Insert author here" />
        <button type="submit">Add new book</button>
      </form>
    </div>
  );
}

function RemoveBook({ bookId }) {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(bookId));
  };

  return <button type="button" onClick={removeBookHandler}>Remove Book</button>;
}

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </ul>
    </div>
  );
}

export {BookList, NewBook, RemoveBook};
