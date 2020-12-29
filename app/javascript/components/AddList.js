
import React, { useState } from 'react'
import { useListsValue } from '../context'
import axios from 'axios'

const AddList = ({shouldDisplay = false}) => {
    const {lists, setLists} = useListsValue()
    const[display, setDisplay] = useState(shouldDisplay)
    const[list, setList] = useState({ title: ""})
    const[title, setTitle] = useState("")

    const handleChange = e => {
        setList(Object.assign({}, list, {[e.target.name]: e.target.value}))
        setTitle(e.target.value)
    }

    //handle form submit to create new list and set display of form to false
    const handleSubmit = e => {
        e.preventDefault();
       axios.post('/api/v1/lists', {...list})
       .then((resp) => {
       console.log(resp)
       setTitle("")})
       .catch( content => console.log('Error', content)
        )
        setDisplay(false)
        setLists([...lists].concat({...list}))
    }
        
    return (
        <form className="sidebar__add-list">
      {display && (
      <div className="sidebar__add-list__inner">
          <div className="sidebar__add-list__header">Create a new List</div>
            <input
              className="sidebar__add-list__input"
              type="text"
              placeholder="Add List Title"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <br />
            <button
              className="sidebar__add-list__submit"
              onClick={handleSubmit}
            >
              Add
            </button>
            <button
            className="sidebar__add-list__cancel"
            onClick={() => setDisplay(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setDisplay(false)
            }}
            role="button"
            tabIndex={0}
          >
            Cancel
          </button>
        </div>
        )}
        <span className="sidebar__add-list__plus">
        <span>+</span>
      <span
        aria-label="Add List"
        className="sidebar__add-list__button"
        onClick={() => setDisplay(!display)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setDisplay(!display)
        }}
        role="button"
        tabIndex={0}
      >
        Add List
      </span>
      </span>
    </form>
    )
}
export default AddList