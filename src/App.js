import React, { useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux'
import store from './store'
import List from './components/List/List'
import Repo from './components/Repo/Repo'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const { MenuIcon, Nav, NavbarBrand } = require('./assets/styled/Nav')
function App() {

  const Home = () => {
    return <List parentCallback={callback} />
  }
  const [navMode, setNavMode] = useState(undefined)
  function callback(e) {
    setNavMode(e)
  }
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Nav className="navbar navbar-expand-lg navbar-light">
          <Container>
            {
              navMode ?
                <Link to={`/`}>
                  <MenuIcon src={require('./assets/img/left-arrow.png')} width="20" className="menu-icon" />
                </Link>
                : <MenuIcon src={require('./assets/img/menu.png')} width="20" className="menu-icon" />
            }
            <NavbarBrand href="/">{navMode ? navMode : 'Github JavaPop'}</NavbarBrand>
          </Container>
        </Nav>
        <Switch>
          {/* Listagem */}
          <Route exact path="/" component={Home} />

          {/* Repo */}
          <Route path="/repo/:id" children={<Repo parentCallback={callback} />} />
        </Switch>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
