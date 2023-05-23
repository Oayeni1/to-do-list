import React from "react";

const TodosList = ({todos, setTodos, setEditTodo}) => {
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
    <div>
        {todos.map((todo) => (
            <li className="list-item" key={todo.id}>
                <input
                type="text"  
                value={todo.title}
                className="list"
                onChange={(event) => event.preventDefault()}
            />
            <div>
                <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                    <i className="fa fa-trash"><p>DEL</p></i>
                </button>
            </div>
            </li>
        ))}
    </div>
    );
}

export default TodosList;