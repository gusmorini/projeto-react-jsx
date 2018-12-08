import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { setAutenticado } from '../utils/LoginManager';

class LoginPage extends Component {

  onLoginClick = () => {
    setAutenticado(true);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>

        <h1>
          Login
        </h1>
        <Button onClick={this.onLoginClick}>
          Entrar
        </Button>

      </div>
    )
  }
}

export default LoginPage;