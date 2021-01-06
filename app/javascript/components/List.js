import React, {useState} from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import axios from 'axios'
import { useListsValue } from '../context'
import { EditList } from './EditList'



const List = props => {
    const { lists, setLists } = useListsValue()
    const[edit, setEdit] = useState(false)

    //delete list from database and remove list from array of lists in state
    // const handleDelete = id => {
    //     axios.delete(`/api/v1/lists/${id}`).
    //   then(res => {
    //      const included = [...lists]
    //      const index = included.findIndex( (res) => res.id == id)
    //      included.splice(index, 1)
    //      setLists(included)
    //      console.log(included)
    //   })
    //   .catch( data => console.log('Error', data))
    // }
  
   
    return (
        <div className="sidebar__list-item">
        <span className="sidebar__list-dot">•</span>
        <span className="sidebar__list-title">{props.list.title}</span>
        <span className="sidebar__list-edit"
        tabIndex={0}
        role="button"
        aria-label="Edit list"
        onClick={ () => setEdit(!edit)
        }>
          <FaEllipsisH />
          </span>
          <EditList 
          list={props.list} 
          setEdit={setEdit} 
          edit={edit}
          lists={lists}
          setLists={setLists} />
                </div>

    )
}
 export default List
