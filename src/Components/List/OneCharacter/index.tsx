import React from 'react';

type OneCharacterPropsType = {
  name: string;
  house: string;
};

export const OneCharacter = ({ name, house }: OneCharacterPropsType) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{house}</p>
    </div>
  );
};
