import Axios from 'axios'
import React from 'react'
import axios from 'axios'

export const TaskCheck = () => {
    const onCheck = () => {
        axios.put('/api/v1/lists', {...list})
    }
    return (
        <div>
            
        </div>
    )
}
