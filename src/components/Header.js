// Importing necessary components from 'react-bootstrap' and 'styled-components'
import { Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';

// Creating a styled component for the Navbar with additional styling
const StyledNavbar = styled(Navbar)`
  margin-bottom: 20px;
`;

// Functional component that represents the Header of the application
const Header = () => {
  return (
    // Using the styled Navbar component with 'dark' background and variant
    <StyledNavbar bg="dark" variant="dark">
      {/* Container to wrap the Navbar content */}
      <Container>
        {/* Navbar brand element with a link to the home page */}
        <Navbar.Brand href="#home">Hangman Game</Navbar.Brand>
      </Container>
    </StyledNavbar>
  );
};

// Exporting the Header component as the default export
export default Header;
