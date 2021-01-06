import React, { useState} from 'react'
import List from './List'
import { useListsValue, useSelectedListValue, useTaskInboxValue, useTodayInboxValue } from '../context'


const Lists = () => {
    const { lists } = useListsValue()
    const[selected, setSelected] = useState('')
    const { selectedList,setSelectedList } = useSelectedListValue()
    const { todayInbox, setTodayInbox} = useTodayInboxValue()
    const { setTaskInbox} = useTaskInboxValue()
    
    var allLists = lists.filter((list) => list.title != "TASKINBOX")
  
    return (
      allLists.map((value, index) => (
          <li
            className={
              selected === value.slug
                ? 'selected sidebar__list'
                : 'sidebar__list' 
            } key={index}
          >
            <div
              role="button"
              aria-label={`Select ${value.title} as list`}
              onClick={() => {
                setSelected(value.id)
                setSelectedList(value)
                setTodayInbox(false)
                setTaskInbox(false)

              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setSelected(value.id)
                  setSelectedList(value)
                  setTodayInbox(false)
                  setTaskInbox(false)
                }
              }}
            >
              <List list={value}/>
            </div>
          </li>
        ))
      )
    }
export default Lists