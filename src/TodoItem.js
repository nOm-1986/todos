import React from "react";
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
    
    
    return (
        <li className="card">
            <CompleteIcon/>
            {/* <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
                <BsCheckCircle/>
            </span> */}

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            {/* <span className="Icon Icon-delete" onClick={props.onDelete}>
                <BsFillXOctagonFill/>
            </span> */}
            <DeleteIcon/>
        </li>
    );
}

export {TodoItem};