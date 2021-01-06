import React, { useState } from 'react'
import { FaCalendarAlt, FaEllipsisH, FaTrashAlt } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import moment from 'moment'
import { useSelectedListValue, useTasksValue, useTodayInboxValue, useTodayTasksValue } from '../context'

export const EditTask = props => {
    const [showEdit, setShowEdit] = useState(false)
    const [name, setName] = useState(props.task.name)
    const {tasks, setTasks} = useTasksValue()
    const {selectedList} = useSelectedListValue()
    const[taskDate, setTaskDate] = useState(new Date(props.task.date))
    const[showTaskDate, setShowTaskDate] = useState(false)
    const { todayTasks, setTodayTasks } = useTodayTasksValue()
    const { todayInbox } = useTodayInboxValue()
    //const [date,setDate] = useState(props.task.date)

   
    //update task name or date and tasks state
    const handleSubmit = e => {
      var today = moment().format('YYYY-MM-DD')
      e.preventDefault()
      axios.patch(`/api/v1/tasks/${props.task.id}`, {name: name, date: taskDate })
      .then(() => { !todayInbox?
          axios.get(`/api/v1/lists/${selectedList.id}`)
            .then((res) => 
            setTasks(res.data.tasks))
            : axios.get('/api/v1/tasks')
            .then((res) => 
            setTodayTasks(res.data.filter((task) => task.date == today))
      )})
          .catch( content => console.log('Error', content))
          setShowEdit(false)
  }

  //delete task from database and update tasks state
  const selectedTasks = todayInbox? todayTasks : tasks
  const handleDelete = id => {
    axios.delete(`/api/v1/tasks/${id}`).
    then(res => {
     const included = [...selectedTasks]
     const index = included.findIndex( (res) => res.id == id)
     included.splice(index, 1)
     todayInbox?
     setTodayTasks(included)
     : setTasks(included)
     setShowEdit(false)
    })
    .catch( data => console.log('Error', data))
}

    return (
      <div className="edit-task">
        <span
             className="edit-task__dots"
             onClick= {() => setShowEdit(!showEdit)}
             aria-label="edit task"
             role="button"
             >
           <FaEllipsisH />
        </span>
    {showEdit && (
      <div className="edit-task__menu">
        <div className="edit-task__main">
            <div className="edit-task__header">Edit Task</div>
        <div className="edit-task__cross"
        onClick={ () => {
            setShowEdit(false)
        }}
        > X
        </div>
            <input
              className="edit-task__input"
              type="text"
              placeholder="Edit task name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <span
              className="edit-task__button"
              onClick={handleSubmit}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit
                }
              }}
            >
              Confirm
            </span>
            <span
            className="edit-task__cancel"
            onClick={() => setShowEdit(false)}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
          <span
              className="edit-task__date"
              onClick={() => setShowTaskDate(!showTaskDate)}
              onKeyDown={(e) => {
              if (e.key === 'Enter') setShowTaskDate(!showTaskDate);
              }}
              tabIndex={0}
              role="button"
              >
                  <FaCalendarAlt />
                  </span>
                  {showTaskDate && <DatePicker className="edit-task__datepick" 
                  selected={taskDate} 
                  onChange={(e) => setTaskDate(e)} /> 
            }
                  <span
                className={ showTaskDate ? "edit-task__delete" : "edit-task__deletewithout"}
                tabIndex={0}
                role="button"
                aria-label="Delete list"
                onClick={() => handleDelete(props.task.id)}
                >
                    Delete Task <FaTrashAlt className="edit-task__trash" />
                    </span>
        </div>
        </div>
    )}
        </div>
    )
}
