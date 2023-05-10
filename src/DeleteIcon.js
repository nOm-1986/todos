import React from "react";
import { TodoIcon } from "./TodoIcon";


const DeleteIcon = ({onDelete}) => {
    return(
        <TodoIcon
            type="delete"
            color="darkGray"
            onClick={onDelete}
        />
    )
}

export { DeleteIcon };