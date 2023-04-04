import { createSlice } from '@reduxjs/toolkit';
// Includes an array of categories (initial state: empty array)
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: [] },
// Includes a reducer that checks the status and always returns "Under construction" (the initial state should check to that string)
  reducers: {
    checkStatus: (state) => {
      return 'Under construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
