import React from "react";

function FormInput() {
  return (
    <form autoComplete="off">
      <input
        type="text"
        name="todos"
        id="todos"
        placeholder="What do you need done?"
        required
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default FormInput;
