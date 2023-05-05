import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton() {

  const onClickButton = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.className);
  }

  return (
    <button 
    className="CreateTodoButton"
    //onClick={() => { console.log('Tu primer evento con React') }}
    onClick={ onClickButton }
    >
        + 
    </button>
  );
}

export { CreateTodoButton };

