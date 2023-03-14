import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

// ! to fix typings later
const initialState: any = {
  cart: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //  console.log(action.payload.name);
      // const tempCart = state.cart.find(
      //   (item) => item.name === action.payload.name
      // );
      // if (tempCart) {
      //   fdfd;
      // }
    },
  },
});

export const { addToCart } = homeSlice.actions;

export default homeSlice.reducer;
