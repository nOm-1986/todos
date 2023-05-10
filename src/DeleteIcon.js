import React from "react";
import { TodoIcon } from "./TodoIcon";


const DeleteIcon = ({onClick}) => {
    return(
        <TodoIcon
            type="delete"
            color="darkGray"
            onClick={onClick}
        />
    )
}

export { DeleteIcon };