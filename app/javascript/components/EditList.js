import React, {useState} from 'react'
import axios from 'axios'
import { useListsValue } from '../context';
import { FaTrashAlt } from 'react-icons/fa';


export const EditList = props => {

    const[title, setTitle] = useState("")
    const {lists, setLists} = useListsValue();

    const updateLists = () => {
        const newList = props.list
        newList.title = title
        const temp = [...lists]
        temp.filter(list => list.id !== props.list.id)
        setLists(temp)
    }
    
    const editTitle = e => {
        //e.preventDefault();
        axios.patch(`/api/v1/lists/${props.list.id}`, {title: title })
        .then(() => {
            props.setEdit(!props.edit)
            updateLists()})
            .catch( content => console.log('Error', content))
    }
    //delete list from database and remove list from array of lists in state
    const handleDelete = id => {
        axios.delete(`/api/v1/lists/${id}`).
      then(res => {
         const included = [...lists]
         const index = included.findIndex( (res) => res.id == id)
         included.splice(index, 1)
         props.setLists(included)
         console.log(included)
      })
      .catch( data => console.log('Error', data) )
    }

    return ( props.edit && (
    <div className="edit-list__menu">
            <ul className="edit-list__main">
            <span className="edit-list__header">Edit list</span>
        <span className="edit-list__cross"
        onClick={ () => {
            props.setEdit(false)
            console.log('clicked')
        }}
          tabIndex={0}
          role="button"
        > x
        </span>
        <li>
        <input
              className="edit-list__input"
              type="text"
              placeholder="Edit title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            </li>
            <span
              className="edit-list__button"
              onClick={editTitle}
            >
              Confirm
            </span>
            <span
                className="sidebar__list-delete"
                tabIndex={0}
                role="button"
                aria-label="Delete list"
                onClick={() => handleDelete(props.list.id)}
                >
                    <span><FaTrashAlt /></span>
                    </span>
            </ul>
        </div>
    )
    )
}
