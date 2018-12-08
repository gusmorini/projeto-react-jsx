import React, { Component } from 'react';
import { Container, Nav, NavItem } from 'reactstrap';
import {
  HashRouter,
  BrowserRouter,
  Link,
  Route
} from 'react-router-dom';

import './App.css';
import PrivateRoute from '../components/PrivateRoute';

import HomePage from './HomePage';
import TarefasPage from './TarefasPage';
import SobrePage from './SobrePage';
import LoginPage from './LoginPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          
          <Nav>
            <NavItem>
              <Link className="nav-link" to="/"> Home </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/tarefas"> Tarefas </Link>
            </NavItem>           
            <NavItem>
              <Link className="nav-link" to="/sobre"> Sobre </Link>
            </NavItem>
          </Nav>

          <Route path="/" exact component={HomePage} />
          <PrivateRoute path="/tarefas" component={TarefasPage} />
          <Route path="/sobre" component={SobrePage} />
          <Route path="/login" component={LoginPage} />

        </Container>
      </BrowserRouter>
    );
  }
}
export default App;