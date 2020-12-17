import React, {useState} from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { useListsValue } from '../context';


const List = props => {
    const { lists, setLists } = useListsValue();

    //delete list from database and remove list from array of lists in state
    const handleDelete = id => {
        axios.delete(`/api/v1/lists/${id}`).
      then(res => {
         const included = [...lists]
         const index = included.findIndex( (res) => res.id == id)
         included.splice(index, 1)
         setLists(included)
         console.log(included)
      })
      .catch( data => console.log('Error', data) )
    }
  
   
    return (
        <div>
        <span>{props.list.title}</span>
        <span
                className="sidebar__list-delete"
                tabIndex={0}
                role="button"
                aria-label="Delete list"
                onClick={() => handleDelete(props.list.id)}
                >
                    <span><FaTrashAlt /></span>
                    </span>
                </div>

    )
}
 export default List
