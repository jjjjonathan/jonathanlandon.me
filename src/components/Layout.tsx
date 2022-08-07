import React from 'react';
import GlobalStyle from '../styles/global';
import Navbar from './Navbar';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <Navbar />
    <main className="container">{children}</main>
  </>
);

export default Layout;
