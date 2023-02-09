import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Arrow } from '../Arrow';
import { Link } from 'react-router-dom';
import { Button } from 'Components/Common/Button';
import style from './EmptyHouse.module.scss';

type HouseProps = {
  title: string;
  image: string;
  colorBtn: string;
  color: string;
  url: string;
  colorBtn2: string;
  color2: string;
  url2: string;
};

export const EmptyHouse: React.FC<HouseProps> = ({
  title,
  image = '',
  url = '',
  colorBtn = '',
  color = '',
  url2 = '',
  colorBtn2 = '',
  color2 = '',
}) => {
  return (
    <div style={{ background: image }} className={style.image}>
      <Arrow to={routes.houses} title={'Back'} />
      <h1 className={style.title}>{title}</h1>
      <div className={style.links}>
        <Link to={url}>
          <Button title={'students'} color={colorBtn} textColor={color} />
        </Link>
        <Link to={url2}>
          <Button title={'staff'} color={colorBtn2} textColor={color2} />
        </Link>
      </div>
    </div>
  );
};
