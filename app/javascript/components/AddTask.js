import React, {useState, useEffect} from 'react'
import { useListsValue, useSelectedListValue, useTasksValue } from '../context'
import axios from 'axios'
import { FaCalendarAlt, FaRegListAlt } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { TaskList } from './TaskList'

export const AddTask = ({
    showAddMain,
    setShowAddMain,
    showQuickAddTask,
    displayQuick = false,
    }) => {

    const {selectedList, setSelectedList} = useSelectedListValue()
    const [showQuickAdd, setShowQuickAdd] = useState(showQuickAddTask)
    const[taskDate, setTaskDate] = useState(new Date())
    const [showTaskLists, setShowTaskLists] = useState(false)
    const[name, setName] = useState("")
    const {tasks, setTasks} = useTasksValue()
    const[list, setList] = useState("")
    const[showQuick, setShowQuick] = useState(displayQuick)
    const[showTaskDate, setShowTaskDate] = useState(false)

    const list_id = list || selectedList.id

        const handleClick = () => {
        setShowQuick(false)
        setShowAddMain(false)
    }

    //create new task and update state of tasks for selected list
    const handleSubmit = e => {
        e.preventDefault()
        const task = {
            name: name,
            completed: false,
            date: taskDate,
            list_id: parseInt(list_id)
        }
         list_id 
            && name
            && axios.post('/api/v1/tasks', task
            )
        .then(() => {
            axios.get(`/api/v1/lists/${list_id}`)
            .then((res) => {
            setTasks(res.data.tasks)
            setShowQuick(false)
            setName("")
        })})
            .catch( content => console.log('Error', content))
    }
   

    return (
        <div className={showAddMain ? "add-task add-task__menu" : "add-task"}>
            {showQuickAdd && 
             <div className="add-task__shallow"
             onClick= {(e) => setShowQuick(!showQuick)}
             aria-label="Add task"
             role="button"
             >
           <span className="add-task__plus">+</span>
          <span className="add-task__text">Add Task</span>
        </div>
    }

    {(showQuick || showAddMain) && (
        <div className="add-task__main">
          {showAddMain && (
        //<>
        <div>
            <div className="add-task__header">Create a new Task</div>
        <div className="add-task__cross"
        onClick={ () => {
            setShowAddMain(false)
        }}
        > X
        </div>
        </div>
        //</>
          )}
            <input
              className="add-task__input"
              type="text"
              placeholder="Add Task"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <span
              className="add-task__button"
              onClick={handleSubmit}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit
                }
              }}
            >
              Add
            </span>
            <span
            className="add-task__cancel"
            onClick={() => handleClick()}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
                  {showAddMain &&
                  <TaskList
                  showTaskLists={showTaskLists} 
                  setShowTaskLists={setShowTaskLists}
                  setList={setList} 
                  setSelectedList={setSelectedList}
               />  
                  }
                  {showAddMain &&
                  <span
                  className="add-task__lists"
                  onClick={() => setShowTaskLists(!showTaskLists)}
                  tabIndex={0}
                  role="button"
              >
                  <FaRegListAlt />
                  </span>
          }
          <span
              className="add-task__date"
              onClick={() => setShowTaskDate(!showTaskDate)}
              onKeyDown={(e) => {
              if (e.key === 'Enter') setShowTaskDate(!showTaskDate)
              }}
              tabIndex={0}
              role="button"
              >
                  <FaCalendarAlt />
                  </span>
                   { showTaskDate && 
                  <DatePicker className="add-task__datepick" selected={taskDate} onChange={e => setTaskDate(e)} /> 
          }
          
        </div>
    )}
        </div> 
    )
}
