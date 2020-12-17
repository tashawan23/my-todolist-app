import { useState, useEffect } from 'react';
import axios from 'axios';

export const useLists = () => {
    const[lists, setLists] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/lists.json')
        .then(res => {
            setLists(res.data)})
        .catch(res =>  console.log(res))
    }, [lists.length]);

    return { lists, setLists }
    ;
}
