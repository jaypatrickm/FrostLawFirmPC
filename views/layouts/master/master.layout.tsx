import React from 'react';

import Header from '../../../components/header/header.component';
import Footer from '../../../components/footer/footer.component';

interface Props {
  children?: object;
}

const MasterLayout = (props: Props) => (
  <div className="flex flex-col min-h-screen">
    <Header showMobileMenu={false} />
    <div className="flex-sticky">{props.children}</div>
    <Footer />
  </div>
);

export default MasterLayout;
