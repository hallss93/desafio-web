import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonToolbar, Navbar, Container, Image } from 'react-bootstrap';

function App() {
  return (
    <>
    <Navbar expand="lg">
      <Container>
        <Image src="https://fonts.gstatic.com/s/i/materialicons/menu/v1/24px.svg" className="menu-icon" />
        <Navbar.Brand href="#">Github JavaPop</Navbar.Brand>
      </Container>
    </Navbar>


    {/* Listagem */}
    </>
  );
}

export default App;
