import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Lists from './Lists'
import List from './List'
import {Navbar} from './layout/Navbar'
import {Sidebar} from './layout/Sidebar'
import './App.scss'
import { ListsProvider, SelectedListProvider, TasksProvider, TodayInboxProvider, TodayTasksProvider, WeeklyInboxProvider } from '../context'
import { Tasks } from './Tasks'
import { TaskInboxProvider } from '../context/taskInbox-context'

const App = () => {

    return (
        <SelectedListProvider>
            <TaskInboxProvider>
            <TodayInboxProvider>
        <ListsProvider>
            <TasksProvider>
                <TodayTasksProvider>
        <Navbar />
        {/* <section className="main"> */}
        <Sidebar />
        <Tasks />
        {/* </section> */}
        <BrowserRouter>
        <Switch>
            <Route exact path="/lists/:slug" component={List}/>
         </Switch>
         </BrowserRouter>
         </TodayTasksProvider>
         </TasksProvider>
         </ListsProvider>
         </TodayInboxProvider>
         </TaskInboxProvider>
         </SelectedListProvider>
    )
}

export default App
