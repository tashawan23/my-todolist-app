import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { useTasksValue } from '../context'
import axios from 'axios'

export const Reminder = props => {
    const [starTasks, setStarTasks] = useState([])

    useEffect(() => {
        axios.get('/api/v1/tasks')
        .then((res) => {
        setStarTasks(res.data.filter((task) => task.star == true))
        })
    })
    

    return (
        <div className="task-reminder">
            {props.showReminders &&
            <>
                <div className="task-reminder__title"><FaStar color='orange'/>  Important tasks!</div>
                <ul className="task-reminder__list">
                    {starTasks.map(task =>
                        <li className="task-reminder__tasks">
                              {/* <span className="task-reminder__dot">•</span> */}
                            <div className="task-reminder__name">{task.name} due on {task.date}</div>
                            </li>)}
                </ul>
            </>
}
        </div>
    )
}
