import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { taskListState } from "../atoms";

function TaskList() {
  const taskList = useRecoilValue(taskListState);
  const [tasks, setTasks] = useRecoilState(taskListState);

  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <ul>
      {taskList.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => handleDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
