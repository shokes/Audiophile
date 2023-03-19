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
      //console.log(action.payload.short);
      const tempItem = state.cart.find(
        (item) => item.short === action.payload.short
      );
     if (tempItem) {
     const tempCart = state.cart.map((cartItem) => {
       if (cartItem.short === action.payload.short) {
         let newAmount = cartItem.amount + action.payload.amount;
         if (newAmount > cartItem.max) {
           newAmount = cartItem.max;
         }
         return { ...cartItem, amount: newAmount };
       } else {
         return cartItem;
       }
    });
  }
}
});

export const { addToCart } = homeSlice.actions;

export default homeSlice.reducer;


//  if (action.type === 'ADD_TO_CART') {


