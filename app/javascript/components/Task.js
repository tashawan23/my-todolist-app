import React from 'react'

export const Task = props => {
    return (
        <div>
            <span className="task-name">{props.task.name}</span>
            <span> </span>
        </div>
    )
}
