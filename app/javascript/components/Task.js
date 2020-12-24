import React from 'react'
import axios from 'axios'
//import { useTasks } from './hooks'
import { useSelectedListValue, useTasksValue } from '../context'
import { Checkbox } from './Checkbox'


export const Task = props => {
    //const { setSelectedList } = useSelectedListValue();
    const { tasks, setTasks } = useTasksValue();

    const handleDelete = id => {
        axios.delete(`/api/v1/tasks/${id}`).
      then(res => {
         const included = [...tasks]
         const index = included.findIndex((res) => res.id == id)
         included.splice(index, 1)
         setTasks(included)
      })
      .catch( data => console.log('Error', data))

    }
    console.log(props.task)

    return (
        <div>
            <Checkbox task={props.task}/>
            <span className="task-name">{props.task.name}</span>
            <span
                className="task-delete"
                tabIndex={0}
                role="button"
                aria-label="Delete task"
                onClick={() => handleDelete(props.task.id)}
                >
                    <span>X</span>
                    </span>
        </div>
    )
}
