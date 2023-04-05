import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

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

  return <button type="button" onClick={addBookHandler}>Add Book</button>;
}

export default AddBookButton;
