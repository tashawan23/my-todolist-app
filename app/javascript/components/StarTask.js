import React from 'react'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import { useStarredTasksValue, useTasksValue } from '../context'


export const StarTask = props => {
    //const {tasks, setTasks} = useTasksValue()
    const {starredTasks, setStarredTasks} = useStarredTasksValue();

    /**update tasks state after selected task has been marked completed*/
    const updateTasks = () => {
        const newTask = props.task
        newTask.star = !newTask.star
        const temp = [...starredTasks]
        temp.filter(task => task.id !== props.task.id)
        setStarredTasks(temp)

    }

    const colourStar = e => {
        const bool = props.task.star
        e.preventDefault();
        axios.patch(`/api/v1/tasks/${props.task.id}`, {star: !bool })
        .then(() => {
            updateTasks()})
            .catch( content => console.log('Error', content))
    }
    return (
        <div className="star-task">
            <span className={ props.task.star ? "star-task__colouredIcon" : "star-task__icon"}
            onClick={colourStar}>
                <FaStar/>
            </span>
        </div>
    )
}
