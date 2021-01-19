import React from 'react'
import { useWeeklyInboxValue } from '../context'

export const WeeklyTasks = () => {
    const { weeklyInbox, setWeeklyInbox} = useWeeklyInboxValue()
    var today = moment().format('YYYY-MM-DD')
    
    return (
        <div>
            
        </div>
    )
}
