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
      const tempItem = state.cart.find(
        (item: any) => item.short === action.payload.short
      );
      if (tempItem) {
        console.log('product already exists');
      } else {
        console.log('new product');
        // state.cart.push(tempItem);
        state.cart.push(action.payload);
      }
    },
  },
});

export const { addToCart } = homeSlice.actions;

export default homeSlice.reducer;

//  const tempCart = state.cart.map((cartItem: any) => {
//    if (cartItem.short === action.payload.short) {
//      let newAmount = cartItem.amount + 1;
//      if (newAmount > cartItem.max) {
//        newAmount = cartItem.max;
//      }
//    } else {
//      return cartItem;
//    }
//  });
