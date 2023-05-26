import React,{useState} from "react";
import { useLocalStorate } from "./useLocalStorage";
import { AppUI } from "./AppUI";
import './App.css';

const defaultToDos =  [
    {text: 'Curso de React JS ', completed: true},
    {text: 'Estudiar React', completed: false},
    {text: 'Estudiar Ingles', completed: true},
    {text: 'Iniciar Libro React - React Native', completed: false},
    {text: 'Llorar con la llorona', completed: false},
    {text: 'Resto de cosas por hacer', completed: false},
    {text: 'Solo quiero ver que pasa cuando pongo un todo extremadamente largo, van por 3 lienas, se desborda =S', completed: true},
];
localStorage.setItem('TODOS_V1',JSON.stringify(defaultToDos));
// Recuerde que todo lo que se guarda en localStorage tiene si o si que ser un STRING.

function App() {
  
  //parsedTodos = JSON.parse(localStorageTodos);

  //Al usar nuestro custom hooks todos = item, saveTodos = saveItem
  const [todos, saveTodos] = useLocalStorate('TODOS_V1', []);
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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  return (
    <AppUI 
      completedTodo={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
