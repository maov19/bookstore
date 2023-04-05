import { useSelector } from 'react-redux';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            {book.title}
            {' '}
            by
            {' '}
            {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
