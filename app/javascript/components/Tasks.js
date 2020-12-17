import React, {useState, useEffect} from 'react'
import { useListsValue, useSelectedListValue } from '../context';
import axios from 'axios';
import { Task } from './Task'

export const Tasks = () => {
    const {selectedList} = useSelectedListValue();
    const [tasks, setTasks] = useState([]);
    const [list, setList] = useState({});

    //fetch tasks from api that belong to the selectedList
     useEffect(() => {
        axios.get(`/api/v1/lists/${selectedList.id}`)
        .then((res) => {
            setList(res.data)
            setTasks(res.data.tasks)
            //console.log(res.data.tasks)
        })
        .catch(content => console.log('Error', content)) }
        , [selectedList])
    
    return ( tasks ?
    <div className= "tasks">
         <h2 className="tasks__header">{selectedList.title}</h2>
        <ul className="tasks__list">
        {tasks.map((value) =>
            <li key={value.id}>
            <Task task={value} />
        </li> 
        )}
        </ul>
        </div>
        : <h2 className="tasks__header">{selectedList.title}</h2>
    )
}
