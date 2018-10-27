import React from "react";
import Header from "../Components/Header_footer/Header";
import Footer from "../Components/Header_footer/Footer";

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;

// props.children = generates all the content thats sandwiched inside/between the component
// <Layout> all the stuff here is props.children </Layout>
