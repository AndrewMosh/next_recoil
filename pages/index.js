import React from "react";
import { RecoilRoot } from "recoil";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

function Home() {
  return (
    <RecoilRoot>
      <div>
        <h1>My To-Do List</h1>
        <TaskList />
        <AddTask />
      </div>
    </RecoilRoot>
  );
}

export default Home;
