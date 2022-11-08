import React, { useContext, useEffect, useState, useRef } from "react";
import { DataContext } from "./DataProvider";

function FormInput() {
  const [todos,setTodos] = useContext(DataContext)
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();

  const addTodo = (e) =>{
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete:false}])
    setTodoName('')
  }
 
  useEffect(() => {
    todoInput.current.focus()
  }, [])

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="todos"
        id="todos"
        placeholder="What do you need to do?"
        ref={todoInput}
        value={todoName}
        onChange={e => setTodoName(e.target.value.toLowerCase())}
        required
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default FormInput;
