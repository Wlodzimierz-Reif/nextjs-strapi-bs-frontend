// NEXTJS
import Link from "next/link";

// BOOTSTRAP
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*  */}
            {/* we need "legacyBehavior" prop as in latest version of nextjs <Link> renders as <a> in the DOM so we end up having nested <a> tags and it ends up with:
            Unhandled Runtime Error
            Error: Hydration failed because the initial UI does not match what was rendered on the server.
            See more info here: https://nextjs.org/docs/messages/react-hydration-error*/}
            {/*  */}
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/terminals" passHref legacyBehavior>
              <Nav.Link>Terminals</Nav.Link>
            </Link>
            <Link href="/tanks" passHref legacyBehavior>
              <Nav.Link>Storage tanks</Nav.Link>
            </Link>

            <NavDropdown title="What's in store" id="basic-nav-dropdown">
              <Link href="/smalltanks" passHref legacyBehavior>
                <NavDropdown.Item>Small tanks</NavDropdown.Item>
              </Link>
              <Link href="/largetanks" passHref legacyBehavior>
                <NavDropdown.Item>Large tanks</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
