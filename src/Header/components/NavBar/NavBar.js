import { React } from 'react';
import './NavBar.css';
// import SearchForm from './components/SearchForm'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../../coinshark-logo.png';


const NavBar = () => {

  return(
      <div className="NavBar">
        <Navbar bg="light" variant="light" className="cs-navbar">
        <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/cryptocurrencies">Cryptocurrencies</Nav.Link>
          <Nav.Link href="/exchanges">Exchanges</Nav.Link>
          <Nav.Link href="/wallets">Wallets</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      </Container>
      
      </Navbar>
    </div>
  )
}
  
export default NavBar