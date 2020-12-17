import React from 'react'
import { FaCheckCircle, FaRegCalendarPlus } from 'react-icons/fa'

export const Navbar = () => {
    return (
        <header className="header">
             <nav>
                 <div> 
                     <span>
                     MyToDo
                     </span>
                     <span>
                     <FaCheckCircle />
                     </span>
                     <span
                        className="create_task"
                        tabIndex={0}
                        role="button"
                        aria-label="Create task"
                        onClick={() => handleCreate()}
                >
                     <span>
                         <FaRegCalendarPlus />
                     </span>
                     </span>
                     </div>

            </nav>
        </header>
       
    )
}
