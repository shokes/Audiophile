import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

// export const getCryptos: any = createAsyncThunk(
//   'cryptos/getCryptos',
//   async () => {
//     return fetch(requests.cryptoList)
//       .then((resp) => resp.json())
//       .catch((err) => console.log(err));
//   }
// );

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getCryptos.pending, (state) => {
    //   state.loading = true;
    // }),
    //   builder.addCase(getCryptos.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.cryptos = action.payload;
    //   }),
    //   builder.addCase(getCryptos.rejected, (state) => {
    //     state.loading = false;
    //   });
  },
});

// export const {
//   openLoginModal,
//   closeLoginModal,
//   openSignUpModal,
//   closeSignUpModal,
// } = homeSlice.actions;

export default homeSlice.reducer;
