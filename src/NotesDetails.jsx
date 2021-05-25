import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from './useFetch';
import NoteDetailTitle from './NoteDetailTitle';

function NotesDetails() {

    const { id } = useParams();

    const {notes:note} = useFetch("http://localhost:8000/notes/" + id);

    

    return (
        <div className="noteDetail-container">
            <NoteDetailTitle />
            {note && (
                <article>
                <div className="note-content">
                    <div className="note-detail">
                        <h1>{note.title}</h1>
                        <p>{note.content}</p>
                    </div>
                </div>
                    
                </article>
                )}
            
        </div>
    )
}

export default NotesDetails
