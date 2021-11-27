import React from "react";
export default function TaskList(props) {
  return (
    <div className="TaskList">
      <h2>{props.name}</h2>
      <ul>
        {props.taskList.map((t, idx) => (
          <li key={idx}>
            <input
              type="checkbox"
              onChange={() =>
                props.onListChange({ name: t, idx: idx }, props.name)
              }
              checked={props.name === "Done" ? true : ""}
            />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
