import React, { Component } from 'react';

import {
  Alert, Button,
} from 'reactstrap';

import Artigo from '../components/Artigo';
import Contador from '../components/Contador';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Alert color="primary">
          <Artigo
            nome="Douglas"
            texto="Programação Web com React JS"
          />
        </Alert>

        <Button color="primary">Clique aqui</Button>

        <Contador tempo={5} />
        {/* <Contador numero={100} /> */}
      </div>
    )
  }
}

export default HomePage;
