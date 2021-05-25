import React from 'react'

function Search() {
    return (
        <div className="search-container">
            <div className="search-box">
                <input type="text" placeholder="Enter to search"/>
            </div>
            <div className="btnSearch">
                <button>Search</button>
            </div>
        </div>
    )
}

export default Search
