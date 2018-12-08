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
            nome="Gustavo"
            texto="Programação Web com React JS"
          />
        </Alert>

        <h1>Buttons </h1>

        <Button color="default">Default</Button> 
        <Button color="primary">Primary</Button> 
        <Button color="danger">Danger</Button> 
        <Button color="warning">Warning</Button> 
        <Button color="success">Success</Button> 

        {/* <Contador tempo={5} /> */}
        {/* <Contador numero={100} /> */}
      </div>
    )
  }
}

export default HomePage;
