import { useDispatch } from 'react-redux';
import { addBook } from './booksSlice';

function AddBookButton() {
  const dispatch = useDispatch();

  const addBookHandler = () => {
    const newBook = {
      item_id: 'item4',
      title: 'New Book Title',
      author: 'New Book Author',
      category: 'Fiction',
    };

    dispatch(addBook(newBook));
  };

  return <button onClick={addBookHandler}>Add Book</button>;
}
