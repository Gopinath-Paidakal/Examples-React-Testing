import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container fluid>
        <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;