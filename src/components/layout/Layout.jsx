import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Footer from "src/components/Footer";
import NavigationBar from "src/components/NavigationBar";
import SideNav from "../SideNav";

const Layout = ({ children }) => {
  const [gridVisible, setGridVisible] = useState(false);
  return (
    <>
      <Container
        className="showGrid"
        style={{ display: gridVisible ? "block" : "none" }}
      >
        <Row className="display-grid-row">
          <Col className="grid-column display-grid-column"></Col>
          <Col className="grid-column display-grid-column"></Col>
          <Col className="grid-column display-grid-column"></Col>
          <Col className="grid-column display-grid-column"></Col>
          <Col className="grid-column display-grid-column"></Col>
          <Col className="grid-column display-grid-column"></Col>
          <Col className="grid-column display-grid-column"></Col>
          <Col className="grid-column display-grid-column"></Col>
          <Col className="grid-column display-grid-column"></Col>
          <Col className="grid-column display-grid-column"></Col>
          <Col className="grid-column display-grid-column"></Col>
          <Col className="grid-column display-grid-column"> </Col>
        </Row>
      </Container>
      <Container>
        <NavigationBar />
        {/* <SideNav /> */}
        {children}
        <Footer />
      </Container>
      <Button
        onClick={() => setGridVisible(!gridVisible)}
        className="display-grid-button"
      >
        Show grid
      </Button>
    </>
  );
};

export default Layout;
