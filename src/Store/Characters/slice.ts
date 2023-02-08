import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacters } from './effects';

const initialState = {
  characters: [],
  loading: false,
  error: {},
};

const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchCharacters.fulfilled, (state, { payload }) => {
      return { ...state, characters: payload, loading: false };
    });
    builder.addCase(fetchCharacters.rejected, (state, { error }) => {
      return { ...state, error };
    });
  },
});

export const { name: charactersSliceName, reducer: charactersSliceReducer } = charactersSlice;
