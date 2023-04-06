/* eslint-disable */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HGGa9fmUyjETuK6YcEa3/books');
  const data = Object.entries(response.data).map(([id, book]) => ({ id, ...book[0] }));
  return data;
});

export const createBook = createAsyncThunk('books/createBook', async (bookData) => {
  const response = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HGGa9fmUyjETuK6YcEa3/books',
    {
      item_id: bookData.id,
      ...bookData
    },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
  return { ...bookData, id: response.data.item_id };
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    deleteBook(state, action) {
      const bookId = action.payload.itemId;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(createBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectBooks = (state) => state.books.books;

export const { deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
