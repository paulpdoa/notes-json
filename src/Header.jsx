const Header = () => {
    return ( 
        <div className="header-container">
            <div className="titles">
                <h1>Note Lists</h1>
                <p>Create a note freely!</p>
            </div>
            <div className="adding">
                    <a href="/create"><h1>+</h1></a>
            </div>
        </div>
     );
}
 
export default Header ;