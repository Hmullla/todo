import React from "react";

const Task = ({task}) => {
    return (
        <div className={task.id}>
            <h1>{task.title}</h1>
            <h3>{task.text}</h3>
        </div>
    )
}

export default Task;