import React from 'react'
import useFetch from './useFetch';
import {useParams,useHistory} from 'react-router-dom'

function NoteDetailTitle() {

    const { id } = useParams();
    const {notes:note} = useFetch("http://localhost:8000/notes/" + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/notes/" + note.id,{
            method: "DELETE"
        })
        .then(() => {
            history.push('/');
        })
    }

    return (
        <div className="detail-title-container">
            <div className="detail-title">
                <h1>Note Content</h1>
                <p>This is what you selected</p>
            </div>
            <div className="detailBtn">
                <h1 onClick={handleDelete}>&#128465;</h1>
            </div>
        </div>
    )
}

export default NoteDetailTitle
