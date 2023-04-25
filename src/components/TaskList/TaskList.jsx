import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";

function TaskList(props) {
  const tasks = props.tasks;

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={props.deleteTask}
          updateTask={props.updateTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
