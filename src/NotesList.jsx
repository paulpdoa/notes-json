import React from 'react'
import Search from './Search'
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

function NotesList() {

    const { notes } = useFetch("http://localhost:8000/notes")

    return (
        <div className="notes-form-container">
            <Search />
            <div className="notes-content">
            { notes && notes.map((note) => (

                <Link to={`/notes/${note.id}`} key={note.id}>
                    <div className="note-box">
                        <div className="boxes">
                            <h1>{note.title}</h1>
                            <p>{note.content}</p>
                        </div>
                    </div>
                </Link>   
            )) }
                
            </div>
            
        </div>
    )
}

export default NotesList;
