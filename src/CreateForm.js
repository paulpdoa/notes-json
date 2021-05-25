import React from 'react'
import {useHistory} from 'react-router-dom';
import {useState} from 'react'
function CreateForm() {

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const history = useHistory('');
    const handleSubmit = (e) => {
        e.preventDefault();

        const note = {
            title,
            content
        }

        fetch("http://localhost:8000/notes",{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(note)
        })
        .then(() => {
            console.log("New note added");
            history.push('/')
        })
    }

    return (
        <div className="createform-container">
            <form onSubmit={handleSubmit}>
                <div className="form-box">
                    <div className="form-input">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" required />
                    </div>
                    <div className="form-input">
                        <label htmlFor="content">Content</label><br/>
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} required >
                        </textarea>
                    </div>
                    <div className="submitBtn">
                        <button>Add Note</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateForm
