import { projectFirestore } from "./firebase/config";
import { useLogout } from './hookDrawer/useLogout'
import { useAuthContext } from './hookDrawer/useAuthContext'


interface NavBarProps {
    filterUpdate: (arg: any) => void;
    setLogin: (arg: boolean) => void;
    setSignup: (arg: boolean) => void;
}

const NavBar = (props: NavBarProps) => {
    const handleFilterUpdate = props.filterUpdate;
    const { logout, error, isPending } = useLogout();
    const { user } = useAuthContext();

    const handleFilterClick = (filtered: boolean) => {
        if (filtered) {
            projectFirestore.collection('books').where('status', '==', true).get().then((snapshot) => {
                let results: any[] = [];
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                handleFilterUpdate(results)
            })

        } else {
            projectFirestore.collection('books').get().then((snapshot) => {
                let results: any[] = [];
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                handleFilterUpdate(results)
            })
        }
    }

    return (

        <div className="header" >
            <ul className="userActionsList">
                {!user && (
                    <>
                        <li
                            className="userAction"
                            onClick={() => props.setLogin(true)}
                        >
                            Login
                        </li>
                        <li
                            className="userAction"
                            onClick={() => props.setSignup(true)}
                        >
                            Register
                        </li>
                    </>
                )}
                {user && (
                    <>
                    <li>
                        hello, {user.displayName}
                    </li>
                    <li
                        className="userAction"
                        onClick={logout}
                    >
                        Logout
                    </li>
                    </>)}
            </ul>
            <h1>Welcome to MyBrary</h1>

            <div className="filter-buttons">
                <button
                    className="button nav-button"
                    onClick={() => handleFilterClick(true)}>
                    Show only read books
                </button>
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