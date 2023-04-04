import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
// create new book as empty array
  name: 'books',
  initialState: { books: [] },
  reducers: {
    // reducer that adds a book
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    // reducer that removes a book
    removeBook: (state, action) => ({
      ...state, books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
