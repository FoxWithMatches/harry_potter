import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListCharacters } from '../../Components/List';
import { CharactersEffects, CharactersSelectors } from '../../Store';

export const List = () => {
  const dispatch = useDispatch();
  const loading = useSelector(CharactersSelectors.getCharactersLoading);
  const charactersData = useSelector(CharactersSelectors.getCharactersData);

  useEffect(() => {
    dispatch(CharactersEffects.fetchCharacters());
  }, []);
  return loading ? <h1>Loading...</h1> : <ListCharacters charactersData={charactersData} />;
};
