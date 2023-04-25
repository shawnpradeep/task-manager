import React from "react";
import "./Task.css";
import deleteIcon from "../../icons/delete.png";

function Task(props) {
  const updateTask = (id, text) => {
    props.updateTask(id, text);
  };

  return (
    <div className="task" /*style={{ backgroundColor: props.task.color }}*/>
      <textarea
        className="task-text"
        defaultValue={props.task.text}
        onChange={(e) => updateTask(props.task.id, e.target.value)}
      />

      <div className="task-footer">
        <p>{props.task.time}</p>
        <img
          className="delete-icon"
          src={deleteIcon}
          alt="delete button"
          onClick={() => props.deleteTask(props.task.id)}
        />
      </div>
    </div>
  );
}

export default Task;
