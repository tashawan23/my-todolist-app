import React, { useState } from 'react'
import { useListsValue, useSelectedListValue } from '../context'
import axios from 'axios'


export const TaskList = ({ 
    showTaskLists,
    setShowTaskLists,
    setList
}) => {

    const {lists} = useListsValue()
    const {setSelectedList} = useSelectedListValue()
   
    /**set selcted list for new task to be added into*/
    const updateList = e => {
        axios.get(`/api/v1/lists/${e}`)
       .then((resp) => {
       console.log(resp)
       setSelectedList(resp.data)})
       .catch( content => console.log('Error', content)
        )
    }

    var allLists = lists.filter((list) => list.title != "TASKINBOX")

   return (showTaskLists &&
     (<div className="add-task__drop">
         <ul className="add-task__drop-menu">
             {allLists.map(list =>
                <li key={list.id}>
                <div
                  onClick={() => {
                    setList(list.id);
                    updateList(list.id);
                    setShowTaskLists(false)
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Select list"
                >
                  {list.title}
                </div>
              </li> )}
         </ul>
        </div>)
    )
}
