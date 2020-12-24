
import React, {useState, useEffect} from 'react'
import { useListsValue, useSelectedListValue, useTasksValue } from '../context'
import axios from 'axios'
import { FaRegListAlt } from 'react-icons/fa';
import { TaskList } from './TaskList';

export const Test = ({
    showAddMain,
    setShowAddMain,
    showQuickAddTask,
    displayQuick = false,
    }) => {


    const { lists } = useListsValue();
    const {selectedList} = useSelectedListValue();
    const [showQuickAdd, setShowQuickAdd] = useState(showQuickAddTask)
    const[taskDate, setTaskDate] = useState('')
    const [taskList, setTaskList] = useState('')
    //show lists for user to select list 
    const [showLists, setShowLists] = useState(false)
    const[name, setName] = useState("");
    const {tasks, setTasks} = useTasksValue();
    const[list, setList] = useState("")
    const[showQuick, setShowQuick] = useState(displayQuick)

    const list_id = list || selectedList.id

        const handleClick = () => {
        //setShowQuickAdd(!showQuickAdd)
        setShowQuick(!showQuick)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const task = {
            name: name,
            completed: false,
            list_id: parseInt(list_id)}
            console.log(task)
         list_id 
            && name
            && axios.post('/api/v1/tasks', task
            )
        .then(() => {
            setShowLists(false)
            axios.get(`/api/v1/lists/${list_id}`)
            .then((res) => {
            setTasks(res.data.tasks)
            setShowQuick(false)
        })})
            .catch( content => console.log('Error', content))
            //setShowAddMain(false)
            // setShowQuick(false)
        
    }

  return (
    <div
      className={showAddMain ? 'add-task add-task__menu' : 'add-task'}
      data-testid="add-task-comp"
    >
      {showQuickAdd && (
        <div
          className="add-task__shallow"
          data-testid="show-main-action"
          onClick={() => setShowQuick(!showQuick)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setShowQuick(!showQuick);
          }}
          tabIndex={0}
          aria-label="Add task"
          role="button"
        >
          <span className="add-task__plus">+</span>
          <span className="add-task__text">Add Task</span>
        </div>
      )}

      {(showQuick || showAddMain) && (
        <div className="add-task__main" data-testid="add-task-main">
          {showAddMain && (
            <>
              <div data-testid="quick-add-task">
                <h2 className="header">Quick Add Task</h2>
                <span
                  className="add-task__cross"
                  data-testid="add-task-quick-cancel"
                  aria-label="Cancel adding task"
                  onClick={() => {
                    setShowAddMain(false)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setShowAddMain(false)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                >
                  X
                </span>
              </div>
            </>
          )}
          {/* <ProjectOverlay
            setProject={setProject}
            showProjectOverlay={showProjectOverlay}
            setShowProjectOverlay={setShowProjectOverlay}
          />
          <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}
          /> */}
          <input
              className="add-task__input"
              type="text"
              placeholder="Add Task"
              //name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          <button
              className="add-task__button"
              onClick={handleSubmit}
            >
            Add Task
          </button>
          <button
            className="add-task__cancel"
            onClick={() => setShowQuick(false) }
            onKeyDown={(e) => {
              if (e.key === 'Enter') setShowQuick(false) ;
            }}
            role="button"
            tabIndex={0}
          >
              Cancel
            </button>
        </div>
      )}
    </div>
  );
};