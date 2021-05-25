import React from 'react'
import { useState,useEffect } from 'react';

function useFetch(url) {

    const[notes,setNotes] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setNotes(data);
        })
        .catch(err => {
            console.log(err.message);
        })
    },[])
    return {notes}
}

export default useFetch
