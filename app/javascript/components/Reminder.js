import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useStarredTasksValue, useTasksValue } from '../context'

export const Reminder = props => {
    const { starredTasks } = useStarredTasksValue();

    return (
        <div className="task-reminder">
            {props.showReminders &&
            <>
                <div className="task-reminder__title"><FaStar color='orange'/>  Important tasks!</div>
                <ul className="task-reminder__list">
                    {starredTasks.map(task =>
                        <li className="task-reminder__tasks">
                            <div className="task-reminder__name">{task.name} due on {task.date}</div>
                            </li>)}
                </ul>
            </>
}
        </div>
    )
}
