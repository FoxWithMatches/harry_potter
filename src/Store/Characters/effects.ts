import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../Helpers/Network';

export const fetchCharacters = createAsyncThunk('characters', async () => {
  const { data } = await networkInstance.get('/characters');
  return data;
});
