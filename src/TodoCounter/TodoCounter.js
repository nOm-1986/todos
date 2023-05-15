import React from "react";
import './TodoCounter.css';

function TodoCounter({completados, total}) {
    return (
        <h2 className="TodoCounter">Has completado {completados} de {total} TODOs</h2>
    );
}

export { TodoCounter };