import React, { useState } from 'react'
import { FaBell, FaRegCalendarPlus, FaRegPaperPlane } from 'react-icons/fa'
import { useTodayInboxValue } from '../../context'
import { AddTask } from '../AddTask'
import { Reminder } from '../Reminder'

export const Navbar = () => {
    const [showAddMain, setShowAddMain] = useState(false)
    const { todayInbox, setTodayInbox } = useTodayInboxValue()
    const [showReminders, setShowReminders] = useState(false)


    const handleClick = () => {
        setShowAddMain(true)
        setTodayInbox(false)
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
                     <span
                        className="show-reminders"
                        tabIndex={0}
                        role="button"
                        aria-label="Show reminders"
                        onClick={() => setShowReminders(!showReminders)}
                >
                     <button className="show-reminders-icon">
                         <FaBell />
                     </button>
                     </span>
                     </div>
            </nav>
            <AddTask showAddMain={showAddMain} setShowAddMain={setShowAddMain} />
            <Reminder showReminders={showReminders} setShowReminders={setShowReminders}/>
        </header>
       
    )
}
