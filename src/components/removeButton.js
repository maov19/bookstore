import { useDispatch } from 'react-redux';
import { removeBook } from './booksSlice';

function RemoveBookButton({ bookId }) {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(bookId));
  };

  return <button onClick={removeBookHandler}>Remove Book</button>;
}
