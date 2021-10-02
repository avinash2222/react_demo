import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">My Website</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="./">Home</Nav.Link>
        <Nav.Link href="/aboutus">AboutUs</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </>
  )
}

export default Header
