import React from 'react';
import { routes } from 'Helpers/Constants/routes';
import { Arrow } from '../../Components/Common/Arrow';

type OneCharacterContentType = {
  name: string;
  image: string;
  house: string;
};

export const OneCharacterContent = ({ house, image, name }: OneCharacterContentType) => {
  return (
    <div>
      <Arrow title="back" to={routes.gryffindor} />
      <div>
        <img src={image} alt="photo" />
      </div>
      <h4>{name}</h4>
      <p>{house}</p>
    </div>
  );
};
