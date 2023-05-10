import React,{useState} from "react";
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
import './App.css';

const defaultToDos =  [
    {text: 'Curso de React JS ', completed: false},
    {text: 'Estudiar React', completed: false},
    {text: 'Estudiar Ingles', completed: false},
    {text: 'Iniciar Libro React - React Native', completed: false},
    {text: 'Llorar con la llorona', completed: false},
    {text: 'Resto de cosas por hacer', completed: false},
    {text: 'Solo quiero ver que pasa cuando pongo un todo extremadamente largo, van por 3 lienas, se desborda =S', completed: true},

];

//Componente App
function App() {

  const [todos, setTodos] = useState(defaultToDos);
  const [searchValue, setSearchValue] = useState('');

  //!! doble negación para saber que estamos trabajando con valores boleanos
  const completedTodos = todos.filter( todo => !!todo.completed ).length;
  const totalTodos = todos.length;

  // Cuidado con las llaves, si las utilizo dentro del callback de filter debo hacer el return
  // por otro lado si utilizo filter(todo => (todo.text.include(searchValue))) hago el return de forma implicita
  // const searchedTodos = todos.filter(todo => {
  //   todo.text.includes(searchValue);
  // });

  //Includes de arrays - ES7
  const searchedTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  //Función actualizadora del estado apartir de la función actualizadora del estado setTodos()
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => (todo.text === text))
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }


  return (
    <React.Fragment>
        <TodoCounter completados={completedTodos} total={totalTodos}/>

        <section className="container">
          <div className="content-left">
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>

          <div className="content-right">
            <TodoList >
                {searchedTodos.map(todo => (
                    <TodoItem 
                      key={todo.text} 
                      text={todo.text} 
                      completed={todo.completed}
                      //Forma de pasarle una función a un componente sin ejecutarla. 
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
          </div>

        </section>

        <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
