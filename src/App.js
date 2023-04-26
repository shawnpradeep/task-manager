import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

function App() {
  const [tasks, setTasks] = useState([
    // {
    //   id: "1",
    //   text: "This is a note",
    //   time: "2021-03-01 12:00:00",
    // },
  ]);
  const [searchText, setSearchText] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:3000/api/tasks");
      const data = await res.json();
      setTasks(data[0].tasks);
      // console.log(data[0].tasks);
    };

    fetchTasks();
  }, []);

  const updateTasks = async (username, password, newTasks) => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, tasks: newTasks }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = () => {
    console.log("HERE");
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

    updateTasks("admin", "1234", tasks);
  };

  const deleteTask = (id) => {
    const tempTasks = [...tasks];

    const index = tempTasks.findIndex((task) => task.id === id);
    if (index < 0) return;

    tempTasks.splice(index, 1);

    updateTasks("admin", "1234", tempTasks);
    setTasks(tempTasks);
  };

  const updateTask = (id, text) => {
    const tempTasks = [...tasks];
    console.log("updating task");
    const index = tempTasks.findIndex((task) => task.id === id);
    if (index < 0) return;

    tempTasks[index].text = text;
    setTasks(tempTasks);
    updateTasks("admin", "1234", tasks);
  };

  return (
    <div>
      <Login setButtonDisabled={setButtonDisabled} />
      <button
        id="addTaskButton"
        className="add-task-button"
        onClick={addTask}
        disabled={buttonDisabled}
      >
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
