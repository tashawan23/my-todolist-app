import React, { useState, useEffect, Fragment } from 'react'
import List from './List'
import { useListsValue, useSelectedListValue } from '../context';
import { FaPencilAlt } from 'react-icons/fa';
import { EditList } from './EditList';

const Lists = () => {
    const { lists } = useListsValue();
    const[selected, setSelected] = useState('');
    const { setSelectedList } = useSelectedListValue();
    const[edit, setEdit] = useState(false);

  
    return (
        lists.map((value, index) => (
          <li
            className={
              selected === value.slug
                ? 'selected sidebar__list'
                : 'sidebar__list' 
            } key={index}
          >
            <div
              role="button"
              aria-label={`Select ${value.title} as list`}
              onClick={() => {
                setSelected(value.id);
                setSelectedList(value);
                console.log('pressed')
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setSelected(value.id);
                  setSelectedList(value);
                  console.log(value.id)
                }
              }}
            >
              <List list={value}/>
            </div>
          </li>
        ))
      );
    };
export default Lists