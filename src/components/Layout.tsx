import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../styles/global';
import Navbar from './Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Helmet>
      <title>Jonathan Landon</title>
    </Helmet>
    <GlobalStyle />
    <Navbar />
    <main className="container">{children}</main>
  </>
);

export default Layout;
