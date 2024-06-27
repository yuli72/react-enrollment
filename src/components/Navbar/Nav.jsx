import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from './logo.jpg'; //image
import './Nav.css'; //css


function NavComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-md navbar-dark bg-primary " sticky='top'>
      <Container>
        <Navbar.Brand href="#home">
        <img className="image-logo"
              alt="logo"
              src={logo} //image logo
              width="50"
              height="50"
              
            />{' '}
           <span className='fs-4 fw-bold'> Benedicto College</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
            <Nav.Link className='nav-link' href="#contacts">Contacts</Nav.Link>
            <Nav.Link className='nav-link' href="#about">About Us</Nav.Link>
            <Button variant="primary">Login</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;