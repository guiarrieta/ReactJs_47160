import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="primary" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Tienda muyDeco</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dormitorio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cocina</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Living</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Gift Boxes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBar;