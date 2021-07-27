import { React } from 'react';
import './NavBar.css';
// import SearchForm from './components/SearchForm'
import { Nav, Container, Navbar } from 'react-bootstrap';
import logo from '../../../coinshark-logo.png';

const NavBar = () => {
  return (
    <div className="NavBar">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/cryptocurrencies">Cryptocurrencies</Nav.Link>
              <Nav.Link href="/exchanges">Exchanges</Nav.Link>
              <Nav.Link href="/wallets">Wallets</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
