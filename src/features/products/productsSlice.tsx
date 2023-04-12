import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../../types/ProductType';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await fetch('./products.json');
  const data = await response.json();
  return data.products;
})

type State = {
  products: ProductType[],
  loading: boolean,
  error: string,
};

const initialState: State = {
  products: [],
  loading: false,
  error: ''
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = 'Loading Error'
      })
  }
})

export default productsSlice.reducer;