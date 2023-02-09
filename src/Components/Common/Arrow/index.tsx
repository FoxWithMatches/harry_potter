import React from 'react';
import { Link } from 'react-router-dom';
import style from './Arrow.module.scss';
import arrow from '../../../assets/arrow.png';

type ArrowProps = {
  title: string;
  to: string;
};

export const Arrow: React.FC<ArrowProps> = ({ title, to = '' }) => {
  return (
    <div className={style.arrow_wrapper}>
      <Link to={to} className={style.arrow}>
        <img src={arrow} alt="arrow" className={style.arrow_pr} />
        {title}
      </Link>
    </div>
  );
};
