import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Lists from './Lists'
import List from './List'
import {Navbar} from './layout/Navbar'
import {Sidebar} from './layout/Sidebar'
import './App.scss'
import { ListsProvider, SelectedListProvider, TasksProvider } from '../context'
import { Tasks } from './Tasks'

const App = () => {

    return (
        <SelectedListProvider>
        <ListsProvider>
            <TasksProvider>
        <Navbar />
        <Sidebar />
        <Tasks />
        <BrowserRouter>
        <Switch>
            <Route exact path="/lists/:slug" component={List}/>
         </Switch>
         </BrowserRouter>
         </TasksProvider>
         </ListsProvider>
         </SelectedListProvider>
    )
}

export default App
