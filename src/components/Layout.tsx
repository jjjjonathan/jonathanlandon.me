import React from 'react';
import '@picocss/pico/css/pico.min.css';

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: Props) => {
  return (
    <main>
      <header>Jonathan Landon</header>
      <title>{title && `${title} • `}Jonathan Landon</title>
      {children}
    </main>
  );
};

export default Layout;
