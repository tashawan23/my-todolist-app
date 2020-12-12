import React from 'react'
import { Route, Switch } from 'react-router-dom'
import List from './List'
import Lists from './Lists'

export const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Lists}/>
            <Route exact path="/lists/:slug" component={List}/>
        </Switch>
    )
}

export default App
