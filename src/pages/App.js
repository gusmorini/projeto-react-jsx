import React, { Component } from 'react';
import { Container, Nav, NavItem } from 'reactstrap';
import {
  HashRouter,
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import PrivateRoute from '../components/PrivateRoute';

import HomePage from './HomePage';
import TarefasPage from './TarefasPage';
import SobrePage from './SobrePage';
import LoginPage from './LoginPage';



import Menu from "../components/Menu";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Container>
          
          <Menu />

          {/* Routes */}
          <Route path="/" exact component={HomePage} />
          <PrivateRoute path="/tarefas" component={TarefasPage} />
          <Route path="/sobre" component={SobrePage} />
          <Route path="/login" component={LoginPage} />

          {/* URL erro 404  */}
          <Route render={()=>{
            return (
              <div>Página não encontrada</div>
            );
          }} />

        </Container>
      </BrowserRouter>
    );
  }
}
export default App;

// Olhar Ant Design e Office UI Fabric