import React from 'react'
import axios from 'axios'
import { useTaskInboxValue, useTasksValue } from '../context'
import { Checkbox } from './Checkbox'
import { EditTask } from './EditTask'
import { StarTask } from './StarTask'
import moment from 'moment'


export const Task = props => {
    const { taskInbox } = useTaskInboxValue()
    var today = moment().format('YYYY-MM-DD')
    const date = props.task.date 
    
    return (
        <div>
            <Checkbox task={props.task}/>
            <span className="task-name">{props.task.name}</span>
            {taskInbox && (today > date) &&
            <span className="task-date">{props.task.date}</span>
            }
            <span className="task-icons">
            <StarTask task={props.task}/>
            <EditTask task={props.task}/>
            </span>
        </div>
    )
}
