import React from 'react'
import CreateForm from './CreateForm'

function Create() {
    return (
        <div className="create-container">
            <div className="create-form">
                <div className="create-title">
                    <h1>Create</h1>  
                    <p>Add something to your notes</p>  
                </div>
                <div className="backBtn">
                    <a href="/"><h1>&#60;</h1></a>
                </div>
            </div>  
            
            <div className="add-note-container">
                <CreateForm />
            </div>
        </div>
    )
}

export default Create
