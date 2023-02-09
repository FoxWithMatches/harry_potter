import React from 'react';
import style from './Button.module.scss';

type ButtonProps = {
  title: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
  color?: string;
  textColor?: string;
};

export const Button: React.FC<ButtonProps> = ({ title, onClick, color = '', textColor = '' }) => {
  return (
    <button
      className={style.button}
      onClick={onClick}
      style={{ backgroundColor: color, color: textColor }}
    >
      {title}
    </button>
  );
};
