import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../Helpers/Constants/routes';
import style from './Button.module.scss';

export const Button = () => {
  return (
    <Link to={routes.characters} className={style.button}>Look</Link>
  );
};
