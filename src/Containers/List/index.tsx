import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ListCharacters } from '../../Components/List';
import { CharactersEffects } from '../../Store';

export const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CharactersEffects.fetchCharacters());
  }, []);
  return (
    <div>
      <ListCharacters />
      <ListCharacters />
      <ListCharacters />
    </div>
  );
};
