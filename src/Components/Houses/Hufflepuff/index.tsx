import { EmptyHouse } from 'Components/Common/EmptyHouse';
import { routes } from 'Helpers/Constants/routes';
import React from 'react';

import bckg from '../../../assets/hufflepuff.png';

export const HufflepuffHouse = () => {
  return (
    <div>
      <EmptyHouse
        title={'hufflepuff'}
        image={`url(${bckg})`}
        colorBtn={'#F4CC4F'}
        url={routes.hufflepuff}
        color={'black'}
        colorBtn2={'#676767'}
        url2={routes.staff}
        color2={'white'}
      />
    </div>
  );
};
