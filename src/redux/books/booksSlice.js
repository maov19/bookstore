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
      ...bookData,
    },
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
  return { ...bookData, id: response.data.item_id };
});

/* eslint-disable */
export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId) => {
    try {
      const response = await axios.delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HGGa9fmUyjETuK6YcEa3/books/${bookId}`,
        {
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({ item_id: bookId }),
        },
      );
      return bookId;
    } catch (error) {
      throw new Error(`Failed to delete book: ${error.message}`);
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
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
      .addCase(createBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const bookIndex = state.books.findIndex((book) => book.id === action.payload);
        state.books.splice(bookIndex, 1);
      });
  },
});

export const selectBooks = (state) => state.books.books;

export default booksSlice.reducer;
