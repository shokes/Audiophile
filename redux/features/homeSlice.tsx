import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

// ! to fix typings later
const initialState: any = {
  cart: [],
  tempQuantity: 1,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload[0];
      const quantity = action.payload[1];
      const tempItem = state.cart.find(
        (item: any) => item.short === product.short
      );

      if (tempItem) {
        //finding product in the cart
        const foundProduct = state.cart.find(
          (item: any) => item.short === product.short
        );
        foundProduct.quantity = foundProduct.quantity + quantity;
      } else {
        const newProduct = {
          short: product.short,
          name: product.name,
          price: product.price,
          image: product.cartImage.filename,
          quantity,
        };
        state.cart.push(newProduct);
      }
    },

    increaseQuantity: (state, action) => {
      state.tempQuantity = action.payload + 1;
    },

    decreaseQuantity: (state, action) => {
      if (action.payload === 1) {
        state.tempQuantity = 1;
      } else if (action.payload > 1) {
        state.tempQuantity = action.payload - 1;
      }
    },

    increaseQuantityInCart: (state, action) => {
      const product = state.cart.find(
        (item: any) => item.short === action.payload
      );

      product.quantity += 1;
    },

    decreaseQuantityInCart: (state, action) => {
      const product = state.cart.find(
        (item: any) => item.short === action.payload
      );
      if (product.quantity === 1) {
        product.quantity = 1;
      } else if (product.quantity > 1) {
        product.quantity -= 1;
      }
    },

    deleteAllProductsInCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  increaseQuantityInCart,
  decreaseQuantityInCart,
  deleteAllProductsInCart,
} = homeSlice.actions;

export default homeSlice.reducer;
