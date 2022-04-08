import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
