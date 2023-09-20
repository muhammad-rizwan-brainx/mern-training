import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIS } from "../axios.config";
import axios from "axios";


const signup = createAsyncThunk("users/signup", async (data, thunkAPI) => {
  console.log("inside login thunk", data);
  try {
    const response = await APIS.post(`/users/signup`, data);

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

export { signup };
