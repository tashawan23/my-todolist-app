import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { useStarredTasksValue, useTasksValue } from '../context'
import axios from 'axios'

export const Reminder = props => {
    const { starredTasks } = useStarredTasksValue();

    /**retrive tasks that have been marked as important*/
    // useEffect(() => {
    //     axios.get('/api/v1/tasks')
    //     .then((res) => {
    //     setStarredTasks(res.data.filter((task) => task.star == true))
    //     })
    // }, [])

    return (
        <div className="task-reminder">
            {props.showReminders &&
            <>
                <div className="task-reminder__title"><FaStar color='orange'/>  Important tasks!</div>
                <ul className="task-reminder__list">
                    {starredTasks.map(task =>
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
