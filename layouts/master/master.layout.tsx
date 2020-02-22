import React from 'react';

import Header from '../../components/header/header.component';

interface Props {
  children?: object;
}

const MasterLayout = (props: Props) => (
  <div>
    <Header showMobileMenu={false} />
    {props.children}
  </div>
);

export default MasterLayout;
