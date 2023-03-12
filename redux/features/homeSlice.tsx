import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {
//   openLoginModal,
//   closeLoginModal,
//   openSignUpModal,
//   closeSignUpModal,
// } = homeSlice.actions;

export default homeSlice.reducer;
