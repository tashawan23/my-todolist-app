import React from 'react'
import axios from 'axios'
import { useTasksValue } from '../context'
import { FaCheck} from 'react-icons/fa'


export const Checkbox = props => {
    const {tasks, setTasks} = useTasksValue()

    //update tasks state after selected task has been marked completed
    const updateTasks = () => {
        const newTask = props.task
        newTask.completed = !newTask.completed
        const temp = [...tasks]
        temp.filter(task => task.id !== props.task.id)
        setTasks(temp)

    }

    //update task to completed when checkbox is clicked
    const checkTask = e => {
        const bool = props.task.completed
        e.preventDefault();
        axios.patch(`/api/v1/tasks/${props.task.id}`, {completed: !bool })
        .then(() => {
            updateTasks()})
            .catch( content => console.log('Error', content))

    }

    return (
        <div
        className={props.task.completed ?"task-completed-checkbox"
        :"task-pending-checkbox"}
        onClick={checkTask}
        onKeyDown={(e) => {
            if (e.key === 'Enter') checkTask
        }}
        role="button"
        tabIndex={0}
        >
            { props.task.completed? <span className="task-completed-check" ><FaCheck /></span> :
            <span></span>}
        </div>
    )
}
