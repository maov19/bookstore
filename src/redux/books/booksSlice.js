
import { createSlice } from '@reduxjs/toolkit';

// Includes an array of books (initial state: empty array)
const booksSlice = createSlice({
  name: 'books',
  initialState: { books: [] },
  reducers: {
// Includes a reducer that adds a book
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
// Includes a reducer that removes a book
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;