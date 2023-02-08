import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchCharacters } from './effects';
import { type OneCharacterType } from './types';

const initialState = {
  characters: [] as OneCharacterType[],
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
    builder.addCase(
      fetchCharacters.fulfilled,
      (state, { payload }: PayloadAction<OneCharacterType[]>) => {
        return { ...state, characters: payload, loading: false };
      },
    );
    builder.addCase(fetchCharacters.rejected, (state, { error }) => {
      return { ...state, error };
    });
  },
});

export const { name: charactersSliceName, reducer: charactersSliceReducer } = charactersSlice;
