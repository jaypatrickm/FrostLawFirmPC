import React from 'react';
import Header from '../../../components/header/header.component';
import FooterDesktop from '../../../components/_desktop/footer/footer.component';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Head from 'next/head';

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
    <Head>
      <title>{page} -- Frost Law Firm, PC</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/site-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/site-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/site-icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site-icons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/site-icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Header showMobileMenu={false} page={page} />
    <MasterLayoutContent>{props.children}</MasterLayoutContent>
    <FooterDesktop showRecognitionAffiliation={showRecognitionAffiliation} />
  </MasterLayoutStyles>
);

export default MasterLayout;
