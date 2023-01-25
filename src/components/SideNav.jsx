import React from "react";
import { Container, Nav } from "react-bootstrap";

const SideNav = (props) => {
  return (
    <>
      <Container>
        <Nav
          className="col-md-2 d-none d-md-block bg-light sidebar"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <div className="sidebar-sticky">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      </Container>
    </>
  );
};
export default SideNav;
