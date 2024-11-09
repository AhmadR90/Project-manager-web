import React from "react";
import { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setenteredTask] = useState('');
  function handleChange(event) {
    setenteredTask(event.target.value);
  }
  function handleClick() {
    onAdd(enteredTask);
    setenteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
