import { useState, useEffect } from 'react';
import axios from 'axios';

export const useLists = () => {
    const[lists, setLists] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/lists.json')
        .then(res => {
            setLists(res.data)})
        .catch(res =>  console.log(res))
    }, [lists.length]);

    return { lists, setLists }
    ;
}

export const useTasks = selectedList => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get('/api/v1/tasks.json')
        .then(res => {
            setTasks(res.data.filter((task) => task.list_id === selectedList.id))})
        .catch(res =>  console.log(res))
    }, [selectedList]);

    return { tasks, setTasks };


}
