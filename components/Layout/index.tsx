import Navigation from '../Navigation';
import Footer from '../Footer';
import React, { Fragment } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Navigation />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
