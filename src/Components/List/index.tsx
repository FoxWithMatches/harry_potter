import React from 'react';
import { type OneCharacterType } from 'Store/Characters/types';
import { OneCharacter } from './OneCharacter';

type CharactersListPropsType = {
  charactersData: OneCharacterType[];
};

export const ListCharacters = ({ charactersData }: CharactersListPropsType) => {
  console.log(charactersData, 'charactersData');

  return (
    <main>
      <div>
        {charactersData.map((el) => (
          <OneCharacter key={el.id} name={el.name} house={el.house} />
        ))}
      </div>
    </main>
  );
};
