import React,{useState} from "react";
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import './App.css';

const defaultToDos =  [
    {text: 'Curso de React JS ', completed: false},
    {text: 'Estudiar React', completed: true},
    {text: 'Estudiar Ingles', completed: false},
    {text: 'Iniciar Libro React - React Native', completed: true},
    {text: 'Llorar con la llorona', completed: false},
    {text: 'Resto de cosas por hacer', completed: true},
    {text: 'Solo quiero ver que pasa cuando pongo un todo extremadamente largo, van por 3 lienas, se desborda =S', completed: true},

];

//Componente App
function App() {

  const [todos, setTodos] = useState(defaultToDos);
  const [searchValue, setSearchValue] = useState('');

  //!! doble negación para saber que estamos trabajando con valores boleanos
  const completedTodos = todos.filter( todo => !!todo.completed ).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
        <TodoCounter completados={completedTodos} total={totalTodos}/>

        <section className="container">
          <div className="content-left">
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
