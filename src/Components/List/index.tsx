import React from 'react';
import { type OneCharacterType } from 'Store/Characters/types';
import { ListItem } from './ListItem';
import style from './ListCharacters.module.scss';
import { routes } from 'Helpers/Constants/routes';
import { Arrow } from '../../Components/Common/Arrow';

type CharactersListPropsType = {
  charactersData: OneCharacterType[];
};

export const ListCharacters = ({ charactersData }: CharactersListPropsType) => {
  console.log(charactersData, 'charactersData');

  return (
    <main className={style.image}>
      <Arrow to={routes.houses} title={'Back'} />
      <h1 className={style.title}>Gryffindor</h1>
      <div className={style.container}>
        {charactersData.map((el) => (
          <ListItem key={el.id} name={el.name} image={el.image} id={el.id}/>
        ))}
      </div>
    </main>
  );
};
