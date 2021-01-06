import React, {useState } from 'react'
import { FaArchive, FaChevronDown, FaRegClock } from 'react-icons/fa'
import Lists  from '../Lists'
import { useListsValue, useSelectedListValue, useTaskInboxValue, useTodayInboxValue } from '../../context'
import AddList from '../AddList'
import axios from 'axios'


export const Sidebar = () => {
    const [showLists, setShowLists] = useState(false)
    const { todayInbox, setTodayInbox} = useTodayInboxValue()
    const { taskInbox, setTaskInbox} = useTaskInboxValue()
    const {selectedList, setSelectedList} = useSelectedListValue()
    //console.log(todayInbox)

    return (
        <div className="sidebar">
            <ul className="sidebar__generic">
                <li>
                    <span >
                        <FaArchive />
                        </span>
                    <span 
                    className="sidebar__inbox"
                    onClick={()=> {
                        setTaskInbox(true)
                        setTodayInbox(false)}}
                    >
                        Task Inbox
                        </span>
                    </li>
                <li>
                    <span>
                        <FaRegClock />
                        </span>
                    <span
                    className="sidebar__today"
                    onClick={()=> {
                        setTodayInbox(true)
                        setTaskInbox(false)
                        setSelectedList("")
                    }} >
                        Today
                        </span>
                    </li>
            </ul>
            <div
                className="sidebar__mid"
                aria-label="Show/hide lists"
                onClick={() => setShowLists(!showLists)}
                onKeyDown={(e) => {
                if (e.key === 'Enter') setShowLists(!showLists);
                }}
                role="button"
                tabIndex={0}
      >
                <span>
                    <FaChevronDown className={!showLists ? 'hidden-lists' : undefined}/>
                </span>
                <h2>My Lists</h2>
                </div>
                <ul className="sidebar__lists">{showLists && <Lists />}</ul>
                    <AddList />
            </div>
    )
}
