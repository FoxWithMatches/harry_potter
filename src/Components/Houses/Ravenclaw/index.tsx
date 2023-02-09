import { EmptyHouse } from 'Components/Common/EmptyHouse';
import { routes } from 'Helpers/Constants/routes';
import React from 'react';

import bckg from '../../../assets/ravenclaw.png';

export const RavenclawHouse = () => {
  return (
    <div>
      <EmptyHouse
        title={'Ravenclaw'}
        image={`url(${bckg})`}
        colorBtn={'#654C32'}
        url={routes.ravenclaw}
        color={'white'}
        colorBtn2={'#025E7D'}
        url2={routes.staff}
        color2={'white'}
      />
    </div>
  );
};
