import React from 'react';

import { isAutenticado, setAutenticado } from '../utils/LoginManager';
import { Nav, NavItem } from 'reactstrap';
import {
  Link,
  withRouter,
} from 'react-router-dom';

const Menu = (props) => {

    return (

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

            {
            isAutenticado() ? (
                <NavItem>
                <a  href="" 
                    className="nav-link" 
                    onClick={
                        ()=> {
                            setAutenticado(false);
                            props.history.push('/');
                        }
                    }>
                    
                    Sair
                </a>
                </NavItem>  
            ) : null
            }

        </Nav>
    );

}

export default withRouter(Menu);