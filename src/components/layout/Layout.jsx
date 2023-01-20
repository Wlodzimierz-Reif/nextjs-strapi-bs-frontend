import React from "react";
import { Container } from "react-bootstrap";
import Footer from "src/components/Footer";
import NavigationBar from "src/components/NavigationBar";

const Layout = ({ children }) => {
  return (
    <Container>
      <NavigationBar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
