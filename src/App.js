import React from "react";
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
//import './App.css';

const todos =  [
    {text: 'Estudiar React', completed: true},
    {text: 'Estudiar Ingles', completed: false},
    {text: 'Llorar con la llorona', completed: false},
    {text: 'Llorar con la llorona 2', completed: false}
];

//Componente App
function App(props) {
  return (
    <>
        <TodoCounter />
        <TodoSearch />

        <TodoList >
            {todos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
            ))}
        </TodoList>
        
        <CreateTodoButton />
    </>
  );
}

export default App;
