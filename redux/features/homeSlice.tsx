import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addToCart } = homeSlice.actions;

export default homeSlice.reducer;
