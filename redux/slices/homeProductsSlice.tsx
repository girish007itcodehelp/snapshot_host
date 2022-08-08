// import baseAxios from "@baseApi/base";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { RootState } from "redux/store";

export interface Rating {
  rate: number;
  count: number;
}

export interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface props {
  data: product[];
}

interface initialState {
  products: product[];
  pending: Boolean;
  error: Boolean;
}

const initialState: initialState = {
  products: [],
  pending: false,
  error: false,
};

export const getProducts = createAsyncThunk("home/products", async () => {
  console.log("before call");
  let res = { data: [] };
  // const res = await baseAxios.get("/products");
  console.log("after call");
  return res;
});

export const productsSlice = createSlice({
  name: "homeProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.pending = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.products = payload.data;
      })
      .addCase(getProducts.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const MultProducts = (state: RootState) => state.getProducts.products;
