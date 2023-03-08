import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  }
  return (
    <button 
    className="CreateTodoButton"
    //onClick={() => { console.log('Tu primer evento con React') }}
    onClick={() => {onClickButton('trululu, un mensaje')}}
    >
        + 
    </button>
  );
}

export { CreateTodoButton };