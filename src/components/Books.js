import { useSelector, useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/booksSlice';

/* eslint-disable */
function Book({ book }) {
  return (
    <div>
      <li>
        {book.title}
        {' '}
        by
        {' '}
        {book.author}
        <RemoveBookButton bookId={book.item_id} />
      </li>
    </div>
  );
}

function RemoveBookButton({ bookId }) {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(bookId));
  };

  return <button onClick={removeBookHandler}>Remove Book</button>;
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

export default BookList;
