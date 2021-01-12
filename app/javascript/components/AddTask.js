import React, {useState} from 'react'
import { useSelectedListValue, useTaskInboxValue, useTasksValue, useTodayInboxValue, useTodayTasksValue } from '../context'
import axios from 'axios'
import { FaCalendar, FaCalendarAlt, FaRegListAlt } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { TaskList } from './TaskList'
import moment from 'moment'
import { useTodayTasks } from './hooks'


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
    const {setTasks} = useTasksValue()
    const[list, setList] = useState("")
    const[showQuick, setShowQuick] = useState(displayQuick)
    const[showTaskDate, setShowTaskDate] = useState(false)
    const { setTodayTasks } = useTodayTasks()
    const { todayInbox } = useTodayInboxValue()

    const list_id = todayInbox? 1 :(list || selectedList.id)

        const handleClick = () => {
        setShowQuick(false)
        //setShowAdd(false)
    }
 
    //create new task and update state of tasks for selected list
    const handleSubmit = e => {
      //setShowAddMain(false)
      var today = moment().format('YYYY-MM-DD')
        e.preventDefault()
        const task = {
            name: name,
            completed: false,
            date: taskDate,
            list_id: parseInt(list_id),
            star: false
        }
         list_id 
            && name
            && axios.post('/api/v1/tasks', task
            )
        .then(() => {
          !todayInbox && axios.get(`/api/v1/lists/${list_id}`)
            .then((res) => 
            setTasks(res.data.tasks))
            axios.get('/api/v1/tasks')
            .then((res) => {
            setTodayTasks(res.data.filter((task) => task.date == today))
            setShowQuick(false)
            setShowAddMain(false)
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
            {showQuick && <span
            className="add-task__cancel"
            onClick={() => handleClick()}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>}
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
          {!todayInbox && <span
              className="add-task__date"
              onClick={() => setShowTaskDate(!showTaskDate)}
              tabIndex={0}
              role="button"
              >
                  <FaCalendarAlt />
                  </span>
                  }
                  {!todayInbox && showTaskDate && 
                 <DatePicker className="add-task__datepick" selected={taskDate} onChange={e => setTaskDate(e)} /> 
          }
        </div>
    )}
        </div> 
    )
}
