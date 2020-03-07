import React from 'react';
import Header from '../../../components/header/header.component';
import FooterDesktop from '../../../components/_desktop/footer/footer.component';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface MasterLayoutProps {
  children?: object;
  isMobile?: boolean;
  page: string;
  showRecognitionAffiliation?: boolean;
}

const MasterLayoutStyles = styled.div`
  ${tw`flex flex-col min-h-screen`}
`;

const MasterLayoutContent = styled.div`
  ${tw`flex-sticky`}
`;

const MasterLayout = ({
  isMobile = true,
  page,
  showRecognitionAffiliation = true,
  ...props
}: MasterLayoutProps) => (
  <MasterLayoutStyles>
    <Header showMobileMenu={false} page={page} />
    <MasterLayoutContent>{props.children}</MasterLayoutContent>
    <FooterDesktop showRecognitionAffiliation={showRecognitionAffiliation} />
  </MasterLayoutStyles>
);

export default MasterLayout;
