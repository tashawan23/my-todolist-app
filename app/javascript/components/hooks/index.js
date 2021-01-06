import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTasksValue } from '../../context';

export const useLists = () => {
    const[lists, setLists] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/lists')
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
        axios.get('/api/v1/tasks')
        .then(res => {
            setTasks(res.data.filter((task) => task.list_id === selectedList.id))})
        .catch(res =>  console.log(res))
    }, [selectedList]);

    return { tasks, setTasks };

}
export const useTodayTasks = date => {
    const [todayTasks, setTodayTasks] = useState([])
    const { tasks } = useTasksValue()
    useEffect(() => {
        axios.get('/api/v1/tasks')
            .then((res) => {
                setTodayTasks(res.data.filter((task) => task.date == date))
            })
            .catch( content => console.log('Error', content))}
            ,[tasks.length])
    return { todayTasks, setTodayTasks };

}

export const useInboxTasks = () => {
    const [inboxTasks, setInboxTasks] = useState([])
    const { tasks } = useTasksValue()
    useEffect(() => {
        axios.get('/api/v1/tasks')
            .then((res) => {
            setInboxTasks(res.data.filter(task => task.completed == false))})
    }, [tasks.filter(task => task.completed == false).length])

    return { inboxTasks, setInboxTasks };
}



