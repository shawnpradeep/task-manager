import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const printTasks = () => {
  //   console.log(tasks);
  // };

  // printTasks();

  const addTask = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;

    const tempTasks = [...tasks];
    tempTasks.push({
      id: nanoid(),
      text: "",
      time: dateTime,
    });
    setTasks(tempTasks);
  };

  const deleteTask = (id) => {
    const tempTasks = [...tasks];

    const index = tempTasks.findIndex((task) => task.id === id);
    if (index < 0) return;

    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  };

  const updateTask = (id, text) => {
    const tempTasks = [...tasks];
    console.log("updating task");
    const index = tempTasks.findIndex((task) => task.id === id);
    if (index < 0) return;

    tempTasks[index].text = text;
    setTasks(tempTasks);
    console.log(tasks);
    console.log("reaching here");
  };

  return (
    <div>
      <Login />
      <button className="add-task-button" onClick={addTask}>
        Add Task
      </button>
      <div className="container">
        <Header />
        <SearchBar handleSearchTask={setSearchText} />
        <TaskList
          tasks={tasks.filter(
            (task) =>
              task.text.toLowerCase().includes(searchText) ||
              task.text.toUpperCase().includes(searchText)
          )}
          // tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
