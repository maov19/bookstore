import { createSlice } from '@reduxjs/toolkit';

// Includes an array of categories (initial state: empty array)
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: [] },
  // Includes a reducer that checks the status and always returns "Under construction"
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
