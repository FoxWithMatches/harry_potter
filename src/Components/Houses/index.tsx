import { Arrow } from 'Components/Common/Arrow';
import { Button } from 'Components/Common/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../Helpers/Constants/routes';
import style from './Houses.module.scss';

export const Houses = () => {
  return (
    <div className={style.houses}>
      <Arrow to={routes.main} title={'Back'} />
      <div className={style.houses_wrapper}>
        <Link to={routes.house1}>
          <Button title={'gryffindor'} color={'#F4CC4F'} textColor={'black'} />
        </Link>
        <Link to={routes.house2}>
          <Button title={'ravenclaw'} color={'#F4CC4F'} textColor={'black'} />
        </Link>
        <Link to={routes.house3}>
          <Button title={'slytherin'} color={'#F4CC4F'} textColor={'black'} />
        </Link>
        <Link to={routes.house4}>
          <Button title={'hyfflepuff'} color={'#F4CC4F'} textColor={'black'} />
        </Link>
      </div>
    </div>
  );
};
