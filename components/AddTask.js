import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { taskListState } from "../atoms";

function AddTask() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useRecoilState(taskListState);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTaskList([...taskList, newTask]);
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
