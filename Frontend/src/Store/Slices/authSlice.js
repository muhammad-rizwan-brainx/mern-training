import { createSlice } from '@reduxjs/toolkit';
import { signup } from '../Thunks/useSignup';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    access_token: localStorage.getItem('access_token'),
    isLoading: false,
    error: null,
    successMsg: '',
    errorMsg: '',
  },
  extraReducers(builder) {
    //signup reducers
    builder.addCase(signup.pending, (state, action) => {
      console.log('pending');
      state.successMsg = '';
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload?.message;
      console.log('fulfilled');
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.message;
      console.log('rejected', action.payload);
    });

  },
});
export const authReducer = authSlice.reducer;