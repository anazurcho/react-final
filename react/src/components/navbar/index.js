import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLoggedOut,ChangeTheme } from "../../redux/actions";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = ( { isLoggedIn, userLoggedOut,loggedInUser, ChangeTheme }) => {

    const [DarkMode, DarkModeOn] = useState(()=>false);
    if (DarkMode) {
        ChangeTheme('minty');
    } else {
        ChangeTheme('journal');
    }

    const logoutHandler = () => {
        userLoggedOut();
    }

    const logout = isLoggedIn ?
    <li className="nav-item" onClick={logoutHandler}>
        <Link to="/" className="nav-link">Logout</Link>
    </li> : null;


    const authUser = isLoggedIn ? null : (
        <React.Fragment>
            <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
           
        </React.Fragment>
    );

    return (
        <nav className = "navbar navbar-expand-lg navbar-dark bg-primary" >
            <Link to="/" className="navbar-brand" href="#">LinkAn</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">{loggedInUser}  Home</Link>
                    </li>
                    {authUser}
                    {logout}
                    <DarkModeToggle
                        onChange={DarkModeOn}
                        checked={DarkMode}
                        size={80}
                    />
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        loggedInUser: state.loggedInUser,
    };
}

const mapDispatchToProps = {
    userLoggedOut,
    ChangeTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
