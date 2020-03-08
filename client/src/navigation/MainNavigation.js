import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/auth-context';
import './MainNavigation.css'

export default (props) => {

    const {token, logout} = useContext(AuthContext);
    
    return (
        <header className="main-nav">
        <div className="main-nav-logo">
            <h1>The Navbar</h1>
        </div>
        <nav className="main-nav-items">
            <ul>
                {!token && <li><NavLink to="/auth">Authentication</NavLink></li>}
                {token && (
                    <li><NavLink to="/logout" onClick={logout}>Logout</NavLink></li>
                )}
            </ul>
        </nav>
        </header>
    )
    

}