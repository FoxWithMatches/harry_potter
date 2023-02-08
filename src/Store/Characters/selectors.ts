import { type RootStateType } from 'Store/configureStore';

export const getCharactersData = (state: RootStateType) => state.charactersSlice.characters;
export const getCharactersLoading = (state: RootStateType) => state.charactersSlice.loading;
