import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles/index.css';
import { NextPage } from 'next';

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

type Props = {
  Component: React.ComponentType;
  pageProps: object;
};

const MyApp: NextPage<Props> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
