import React, {useState} from 'react'
import { useSelectedListValue } from '../context'

export const AddTask = ({
    displayAddTask = true, 
    displayQuickAdd = false, 
    setDisplayQuickAdd}) => {

    const {selectedList} = useSelectedListValue();
    const [task, setTask] = useState('')
    const[taskDate, setTaskDate] = useState('')
    const [taskList, setTaskList] = useState('')
    const [showLists, setShowLists] = useState(false)


    const addTask = () => {
        const listId = selectedList.id;
        return ( selectedList 
            && task 
            && axios.post('/api/v1/lists', { ...task, listId})
        .then(() => {
            setTask('');
            setShowLists(false);})
        .catch( resp => {
         let error
         switch(resp.message){
           case "Request failed with status code 401":
             error = 'Please log in to leave a review.'
             break
           default:
             error = 'Something went wrong.'
         }}))
    }

    return (
        <div>
            
        </div>
    )
}
