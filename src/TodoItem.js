import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    const onCompleted = () => {
        alert('Ya completastes el todo ' + props.text)
    };

    const onDeleted = () => {
        alert('Borrastes el todo ' + props.text)
    };
    return (
        <li className="card">
            <div className="card__content">
                <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={onCompleted}>
                    √
                </span>

                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    {props.text}
                </p>
                <span className="Icon Icon-delete" onClick={onDeleted}>
                    x
                </span>
            </div>
        </li>
    );
}

export {TodoItem};