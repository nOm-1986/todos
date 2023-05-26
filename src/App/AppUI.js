import React from "react";
import {TodoCounter} from '../TodoCounter/TodoCounter';
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";

const AppUI = ({completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo}) => {
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
                          //Forma de pasarle una función a un componente sin ejecutarla dentro de una prop. 
                          //Render prop.
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

export {AppUI};