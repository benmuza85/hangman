import { Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  margin-bottom: 20px;
`;

const Header = () => {
  return (
    <StyledNavbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Hangman Game</Navbar.Brand>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
