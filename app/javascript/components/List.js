import React, {useState} from 'react'
import { FaEllipsisH } from 'react-icons/fa'
import { useListsValue } from '../context'
import { EditList } from './EditList'



const List = props => {
    const { lists, setLists } = useListsValue()
    const[edit, setEdit] = useState(false)
   
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
