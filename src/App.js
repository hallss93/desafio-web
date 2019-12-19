import React, { useState } from 'react';
import './App.css';
import { Navbar, Container, Image } from 'react-bootstrap';
import { Provider } from 'react-redux'
import store from './store'
import List from './components/List/List'
import Repo from './components/Repo/Repo'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
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
        <Navbar expand="lg">
          <Container>
            {
              navMode ?
                <Link to={`/`}>
                  <Image src={require('./assets/img/left-arrow.png')} width="20" className="menu-icon" />
                </Link>
                : <Image src={require('./assets/img/menu.png')} width="20" className="menu-icon" />
            }
            <Navbar.Brand href="/">{navMode ? navMode : 'Github JavaPop'}</Navbar.Brand>
          </Container>
        </Navbar>
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
