import React from 'react';
import { Link } from 'react-router-dom';
import style from './OneCharacters.module.scss';

type ListItemPropsType = {
  name: string;
  image: string;
  id: string;
};

export const ListItem = ({ name, image, id }: ListItemPropsType) => {
  return (
    <div className={style.container}>
      <div>
        <img src={image} alt="photo" className={style.character_image} />
      </div>
      <h4 className={style.character_title}>{name}</h4>
      <Link to={`/characters/${id}`}>read more</Link>
    </div>
  );
};
