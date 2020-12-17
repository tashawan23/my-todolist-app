import React, {useState, useEffect} from 'react'
import { FaChevronDown, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa'
import Lists  from '../Lists'
import { useListsValue } from '../../context'
import AddList from '../AddList'


export const Sidebar = () => {
    const [showLists, setShowLists] = useState(false);
    //console.log(lists);

    //fetch todo lists from api 
    // useEffect(() => {
    //     axios.get('/api/v1/lists.json')
    //     .then(res => {
    //         setLists(res.data)})
    //     .catch(res =>  console.log(res))
    // }, [lists.length]);

    return (
        <div className="sidebar">
            <ul className="sidebar__generic">
                <li>
                    <span>
                        <FaRegCalendarAlt />
                        </span>
                    <span>
                        Weekly
                        </span>
                    </li>
                <li>
                    <span>
                        <FaRegClock />
                        </span>
                    <span>
                        Today
                        </span>
                    </li>
            </ul>
            <div
                className="sidebar__mid"
                aria-label="Show/hide lists"
                onClick={() => setShowLists(!showLists)}
                onKeyDown={(e) => {
                if (e.key === 'Enter') setShowLists(!showLists);
                }}
                role="button"
                tabIndex={0}
      >
                <span>
                    <FaChevronDown className={!showLists ? 'hidden-lists' : undefined}/>
                </span>
                <h2>My Lists</h2>
                </div>
                <ul className="sidebar__lists">{showLists && <Lists />}</ul>
                    <AddList />
            </div>
    )
}
