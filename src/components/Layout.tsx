import React from 'react';
import GlobalStyle from '../styles/global';
import { Helmet } from 'react-helmet';
import '@picocss/pico/css/pico.min.css';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Helmet>
        <title>Jonathan Landon</title>
      </Helmet>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};

export default Layout;
