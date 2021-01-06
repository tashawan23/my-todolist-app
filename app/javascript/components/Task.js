import React from 'react'
import axios from 'axios'
import { useTasksValue } from '../context'
import { Checkbox } from './Checkbox'
import { EditTask } from './EditTask'


export const Task = props => {
    //const { tasks, setTasks } = useTasksValue()

    //delete selected task and update tasks state
    // const handleDelete = id => {
    //     axios.delete(`/api/v1/tasks/${id}`).
    //   then(res => {
    //      const included = [...tasks]
    //      const index = included.findIndex((res) => res.id == id)
    //      included.splice(index, 1)
    //      setTasks(included)
    //   })
    //   .catch( data => console.log('Error', data))

    // }
    
    return (
        <div>
            <Checkbox task={props.task}/>
            <span className="task-name">{props.task.name}</span>
            <EditTask task={props.task}/>
        </div>
    )
}
