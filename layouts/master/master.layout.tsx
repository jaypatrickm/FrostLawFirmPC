import React from 'react';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

interface Props {
  children?: object;
}

const MasterLayout = (props: Props) => (
  <div>
    <Header showMobileMenu={false} />
    {props.children}
    <Footer />
  </div>
);

export default MasterLayout;
