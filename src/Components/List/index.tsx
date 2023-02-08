import React from 'react';
import { type OneCharacterType } from 'Store/Characters/types';

type CharactersListPropsType = {
  charactersData: OneCharacterType[];
};
export const ListCharacters = ({ charactersData }: CharactersListPropsType) => {
  console.log(charactersData, 'charactersData')
  return <div>Character</div>;
};
