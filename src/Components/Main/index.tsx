import React from 'react';
import bckg from '../../assets/bckg.png';
import { Button } from '../Common/Button';
import style from './Main.module.scss';

export const MainContent = () => {
  return (
    <div>
      <img className={style.bckg} src={bckg} alt="background image" />
      <Button />
    </div>
  );
};
