import React from 'react';
import './App.css';
import { Navbar, Container, Image } from 'react-bootstrap';
import { Provider } from 'react-redux'
import store from './store'
import List from './components/List/List'

function App() {
  return (
    <Provider store={store}>
      <Navbar expand="lg">
        <Container>
          <Image src="https://fonts.gstatic.com/s/i/materialicons/menu/v1/24px.svg" className="menu-icon" />
          <Navbar.Brand href="#">Github JavaPop</Navbar.Brand>
        </Container>
      </Navbar>
      <List></List>

      {/* Listagem */}
    </Provider>
  );
}

export default App;
