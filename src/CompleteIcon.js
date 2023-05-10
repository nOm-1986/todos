import React from "react";
import { TodoIcon } from "./TodoIcon";

const CompleteIcon = ({ completed, onComplete }) => {
    return(
        <TodoIcon 
            type="check" 
            color={ completed? '#57e075' : 'gray'} 
            onClick={onComplete} 
        />
    )
}

export { CompleteIcon }; 