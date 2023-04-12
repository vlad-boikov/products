import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit"

type State = {
  query: string,
}

const initialState: State = {
  query: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (filter: Draft<State>, action: PayloadAction<string>): void => {filter.query = action.payload},
  },
})

export const { setQuery } = filterSlice.actions; 

export default filterSlice.reducer;