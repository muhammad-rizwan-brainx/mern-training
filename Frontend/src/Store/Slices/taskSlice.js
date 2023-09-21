import { createSlice } from '@reduxjs/toolkit';
import { addTask } from '../Thunks/taskThunk';
const taskSlice = createSlice({
  name: 'task',
  extraReducers(builder) {
    //signup reducers
    builder.addCase(addTask.pending, (state, action) => {
      console.log('pending');
      state.successMsg = '';
      state.isLoading = true;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMsg = action.payload?.message;
      console.log('fulfilled');
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload?.message;
      console.log('rejected', action.payload);
    });

  }
});
export const taskReducer = taskSlice.reducer;