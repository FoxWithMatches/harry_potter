import { OneCharacterContent } from 'Components/OneCharacterContent';
import React from 'react';
import { useParams } from 'react-router-dom';

export const OneCharacter = () => {
  const { id } = useParams();
  console.log(id)

  return <OneCharacterContent name="test" house="test house" image="test image" />;
};
