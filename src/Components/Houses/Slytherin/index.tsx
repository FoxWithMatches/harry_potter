import { EmptyHouse } from 'Components/Common/EmptyHouse';
import { routes } from 'Helpers/Constants/routes';
import React from 'react';

import bckg from '../../../assets/slytherin.png';

export const SlytherinHouse = () => {
  return (
    <div>
      <EmptyHouse
        title={'slytherin'}
        image={`url(${bckg})`}
        colorBtn={'#D0D0D0'}
        url={routes.slytherin}
        color={'black'}
        colorBtn2={'#628555'}
        url2={routes.staff}
        color2={'white'}
      />
    </div>
  );
};
