import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

const TAREFAS = [
  {
    id: 1,
    titulo: "Aprender React",
    descricao: "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
  },
  {
    id: 2,
    titulo: "Aprender Java Script",
    descricao: "of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'"
  },
  {
    id: 3,
    titulo: "Aprender React-Router",
    descricao: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
  }
];

class TarefasPage extends Component {
  render() {

    const tarefasLinks = TAREFAS.map((tarefa, index) => {
      return (
        <li key={tarefa.id}>
          <Link to={'/tarefas/' + tarefa.id}> 
            {tarefa.titulo} 
          </Link>
        </li>
      )
    });

    return (
      <div>
        
        <h1>Tarefas</h1>
          <ul>{tarefasLinks}</ul>

        <Route
          path = "/tarefas/:tarefaId"
          render = { props => {
            const tarefaId = Number(props.match.params.tarefaId);
            const tarefa = TAREFAS.find(tar => tar.id === tarefaId);
            return (
              <div>{tarefa.descricao}</div>
            )
          }}
        />

      </div>
    )
  }
}

export default TarefasPage;
