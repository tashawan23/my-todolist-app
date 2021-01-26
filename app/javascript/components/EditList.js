import React, {useState} from 'react'
import axios from 'axios'
import { useListsValue, useSelectedListValue, useTaskInboxValue } from '../context'
import { FaTrashAlt } from 'react-icons/fa'


export const EditList = props => {

    const[title, setTitle] = useState("")
    const {lists, setLists} = useListsValue()
    const { setTaskInbox} = useTaskInboxValue()
   

    /**update lists state after updating list title*/
    const updateLists = () => {
        const newList = props.list
        newList.title = title
        const temp = [...lists]
        temp.filter(list => list.id !== props.list.id)
        setLists(temp)
        //setSelectedList(newList)
    }
    
    /**update list title*/
    const editTitle = e => {
        axios.patch(`/api/v1/lists/${props.list.id}`, {title: title })
        .then(() => {
            props.setEdit(!props.edit)
            updateLists()})
            .catch( content => console.log('Error', content))
    }

    /**delete list from database and update lists state*/
    const handleDelete = id => {
        axios.delete(`/api/v1/lists/${id}`).
      then(res => {
         const included = [...lists]
         const index = included.findIndex( (res) => res.id == id)
         included.splice(index, 1)
         props.setLists(included)
         props.setEdit(!props.edit)
         setTaskInbox(true)

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
        }}
          tabIndex={0}
          role="button"
        > X
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
                className="edit-list__delete"
                tabIndex={0}
                role="button"
                aria-label="Delete list"
                onClick={() => handleDelete(props.list.id)}
                >
                    Delete List <FaTrashAlt className="edit-list__trash" />
                    </span>
            </ul>
        </div>
    )
    )
}
