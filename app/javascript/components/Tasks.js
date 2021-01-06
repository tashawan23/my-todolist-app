import React, { useEffect, useState } from 'react'
import { useTasksValue, useSelectedListValue, useTodayInboxValue, useTodayTasksValue, useTaskInboxValue, useListsValue } from '../context'
import { Task } from './Task'
import { AddTask } from './AddTask'
import axios from 'axios'
import moment from 'moment';
import { useInboxTasks, useTodayTasks } from './hooks'

export const Tasks = () => {
    const {selectedList} = useSelectedListValue()
    const { tasks } = useTasksValue()
    const { todayInbox } = useTodayInboxValue()
    const { todayTasks } = useTodayTasks(moment().format('YYYY-MM-DD'))
    const { taskInbox } = useTaskInboxValue()
    const {inboxTasks } = useInboxTasks()
    
    console.log(todayTasks)

    return (todayInbox ? 
    <div className= "tasks__today">
    <span className="tasks__header">
        <h3>Today's Tasks</h3>
        </span>
    <span className="tasks__date">{moment().format('MMMM Do YYYY')}</span>
    <ul className="tasks__list">
        {todayTasks.map((value) =>
        <li key={value.id}>
        <Task task={value} tasks={todayTasks} />
        </li> 
        )}
        </ul>
        {todayTasks.length == 0 &&
        <div className="tasks__emptyInbox"> No tasks for today!</div>
        }
        <AddTask showQuickAddTask={true}/>
        </div> 
         : taskInbox ?
         <div className= "tasks">
             <h3 className="tasks__header">Task Inbox</h3>
             <ul className="tasks__list">
                 {inboxTasks.map((value) =>
                 <li key={value.id}>
                     <Task task={value} tasks={inboxTasks} />
                     </li> 
                     )}
                     </ul>
                     {inboxTasks.length == 0 &&
                     <div className="tasks__emptyInbox">Task Inbox is empty. Create new task and get productive!</div>
        }
                      </div>
                     : (selectedList && tasks) ?
                     <div className= "tasks">
                         <h3 className="tasks__header">{selectedList.title}</h3>
                         <ul className="tasks__list">
                             {tasks.map((value) =>
                             <li key={value.id}>
                                 <Task task={value} tasks={tasks} />
                                 </li> 
                                 )}
                                 </ul>
                                 <AddTask showQuickAddTask={true}/>
                                 </div>
                                  : <div>
                         <h2 className="tasks__header">{selectedList.title}</h2>
                        <AddTask showQuickAddTask={true}/>
                        </div>
    )
}
