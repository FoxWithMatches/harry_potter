import { Button } from 'Components/Common/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Helpers/Constants/routes';
import style from './Main.module.scss';

export const MainContent = () => {
  return (
    <div className={style.main}>
      <Link to={routes.houses} className={style.main_link}>
        <Button title={'Go'} color={'#F4CC4F'} textColor={'black'}/>
      </Link>
    </div>
  );
};
