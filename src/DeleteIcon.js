import React from "react";
import { TodoIcon } from "./TodoIcon";


const DeleteIcon = () => {
    return(
        <TodoIcon
            type="delete"
            color="red"
            width="100"
            height="100"
        />
    )
}

export { DeleteIcon };