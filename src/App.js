import React from "react";
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
//import './App.css';

const defaultToDos =  [
    {text: 'Curso de React JS ', completed: false},
    {text: 'Estudiar React', completed: true},
    {text: 'Estudiar Ingles', completed: false},
    {text: 'Llorar con la llorona', completed: false}
];

//Componente App
function App(props) {
  return (
    <React.Fragment>

        <TodoCounter />
        <section className="container">
          <div className="content-left">
            <TodoSearch />
          </div>

          <div className="content-right">
            <TodoList >
                {defaultToDos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
                ))}
            </TodoList>
          </div>

        </section>

        <CreateTodoButton />
        
    </React.Fragment>
  );
}

export default App;
