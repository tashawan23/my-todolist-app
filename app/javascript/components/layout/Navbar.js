import React, { useState } from 'react'
import { FaCheckCircle, FaRegCalendarPlus, FaRegPaperPlane } from 'react-icons/fa'
import { useSelectedListValue } from '../../context'
import { AddTask } from '../AddTask'

export const Navbar = () => {
    const [showAddMain, setShowAddMain] = useState(false)
    const { setSelectedList } = useSelectedListValue()

    const handleClick = () => {
        setShowAddMain(true)
        //setSelectedList()
    }
    return (
        <header className="header">
             <nav>
                 <div> 
                     <span>
                     MyToDo
                     </span>
                     <span className="logo">
                     <FaRegPaperPlane />
                     </span>
                     <span
                        className="create_task"
                        tabIndex={0}
                        role="button"
                        aria-label="Create task"
                        onClick={() => { handleClick() }}
                >
                     <button className="add-task-cal">
                         <FaRegCalendarPlus />
                     </button>
                     </span>
                     </div>
            </nav>
            <AddTask showAddMain={showAddMain} setShowAddMain={setShowAddMain} />
        </header>
       
    )
}
