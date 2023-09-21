import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIS } from "../axios.config";
import axios from "axios";


const addTask = createAsyncThunk("tasks/addTask", async (data, thunkAPI) => {
  console.log("inside addTask thunk", data);
  try {
    const response = await APIS.post(`/users/addTask`, data);

    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return thunkAPI.rejectWithValue({
      statusCode: error.response.status,
      message: error.response.data.error,
    });
  }
});


export {addTask};
