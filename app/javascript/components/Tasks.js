import React from 'react'
import { useTasksValue, useSelectedListValue } from '../context'
import { Task } from './Task'
import { AddTask } from './AddTask'

export const Tasks = () => {
    const {selectedList} = useSelectedListValue()
    const { tasks } = useTasksValue()
    

    return ( (selectedList && tasks) ?
    <div className= "tasks">
         <h2 className="tasks__header">{selectedList.title}</h2>
        <ul className="tasks__list">
        {tasks.map((value) =>
            <li key={value.id}>
            <Task task={value} tasks={tasks} />
        </li> 
        )}
        </ul>
        <AddTask showQuickAddTask={true}/>
        </div>
        : <div>
            <h2 className="tasks__header">{selectedList.title}</h2>
        <AddTask showQuickAddTask={true}/>
        </div>
    )
}
