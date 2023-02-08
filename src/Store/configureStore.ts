import { configureStore } from '@reduxjs/toolkit';
import { charactersSliceName, charactersSliceReducer } from './Characters/slice';

export const store = configureStore({
  reducer: {
    [charactersSliceName]: charactersSliceReducer,
  },
  devTools: true,
});

export type RootStateType = ReturnType<typeof store.getState>;
