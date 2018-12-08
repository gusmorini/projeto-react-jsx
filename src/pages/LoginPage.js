import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import { Prompt } from 'react-router-dom';
import { setAutenticado } from '../utils/LoginManager';

class LoginPage extends Component {

  state = {}

  onLoginClick = () => {
    this.setState({
      usuario: '',
      senha: '',
    },
    ()=>{
      setAutenticado(true);
      this.props.history.push('/');
    })

  }

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]:value
    });
  }

  render() {
    const {usuario, senha} = this.state;
    const BloquearNavegacao = Boolean(usuario||senha);
    return (
      <div>

        <h1>
          Login
        </h1>

        <Prompt 
          when={BloquearNavegacao}
          message="Deseja sair do Login?"
        />
        <div>
          <Input type="text" name="usuario" placeholder="usuario" onChange={this.onInputChange}/>
          <Input type="password" name="senha" placeholder="senha" onChange={this.onInputChange} />
        </div>

        <Button onClick={this.onLoginClick}>
          Entrar
        </Button>

      </div>
    )
  }
}

export default LoginPage;