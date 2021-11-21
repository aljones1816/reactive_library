import { projectFirestore } from "./firebase/config";


interface NavBarProps {
    filterUpdate: (arg: any) => void;
    
}

const NavBar = (props: NavBarProps) => {
    const handleFilterUpdate = props.filterUpdate;
    
    const handleFilterClick = (filtered: boolean) => {
        if (filtered) {
            projectFirestore.collection('books').where('status','==',true).get().then((snapshot) => {
                let results: any[] = [];
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                handleFilterUpdate(results)
            })

            } else {
                projectFirestore.collection('books').get().then((snapshot) => {
                    let results: any[] = [];
                    snapshot.docs.forEach(doc => {
                        results.push({id: doc.id, ...doc.data()})
                    })
                    handleFilterUpdate(results)
                })
            }
        } 

    return (

        <div className="header" ><
            h1>Welcome to MyBrary</h1>
            <div className="filter-buttons">
                <button className="button nav-button" onClick={() => handleFilterClick(true)}>Show only read books</button>
                <button

                    className="button nav-button"
                    onClick={() => handleFilterClick(false)}>
                    Show all books
                </button>
            </div>
        </div>


    )
}

export default NavBar;