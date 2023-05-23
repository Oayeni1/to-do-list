import React, {useState} from "react";
import Header from "./componenets/Header.js";
import Form from "./componenets/Form.js";
import TodosList from "./componenets/TodosList.js";
import LogForm from "./componenets/logForm.js";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList 
          todos={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo}/>
        </div>
      </div>
      <div>
        <LogForm />
      </div>
    </div>
  );
}


export default App;
