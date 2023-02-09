import { EmptyHouse } from 'Components/Common/EmptyHouse';
import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import bckg from '../../../assets/gryffindor.png';

export const GriffindorHouse = () => {
  return (
    <div>
      <EmptyHouse
        title={'Griffindor'}
        image={`url(${bckg})`}
        colorBtn={'#F4CC4F'}
        url={routes.gryffindor}
        color={'black'}
        colorBtn2={'#9C5E4E'}
        url2={routes.staff}
        color2={'white'}
      />
    </div>
  );
};
