const NavBar = (props: any) => {
const {handleUrl} = props;
    return (
        <div className = "header" ><
            h1>Welcome to MyBrary</h1>
            <div className="filter-buttons">
            <button className="button nav-button" onClick = {() => {handleUrl('http://localhost:8000/books?status=true')}}>Show only read books</button>
            <button 
                
                className="button nav-button" 
                onClick = {() => {handleUrl('http://localhost:8000/books/')}}>
                    Show all books
            </button>
            </div>
            </div>
        
        
    )
}

export default NavBar;