import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../styles/global';
import '@picocss/pico/css/pico.min.css';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Helmet>
      <title>Jonathan Landon</title>
    </Helmet>
    <GlobalStyle />
    <main>{children}</main>
  </>
);

export default Layout;
