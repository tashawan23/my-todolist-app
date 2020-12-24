import React, { useState } from 'react'
import { FaRegListAlt } from 'react-icons/fa'
import { useListsValue } from '../context'


export const TaskList = ({ 
    showTaskLists,
    setList
}) => {

    const {lists} = useListsValue();
        //const [showLists, setShowLists] = useState(false)
    //const [showIcon, setShowIcon] = useState(true)
    console.log(JSON.stringify(showTaskLists))

   return (showTaskLists &&
     (<div className="add-task__lists">
         <select onChange={e => setList(e.target.value)}>
            {lists.map(list => 
              <option key={list.id} value={list.id}>{list.title}</option> )}
        </select> 
        </div>)
    )
}
