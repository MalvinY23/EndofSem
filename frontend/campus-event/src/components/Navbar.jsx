import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    return ( <
        nav className = "navbar" >
        <
        div className = "navbar-brand" >
        <
        Link to = "/"
        className = "nav-link" >
        Campus Event <
        /Link> <
        /div> <
        ul className = "navbar-nav" >
        <
        li className = "nav-item" >
        <
        Link to = "/events"
        className = "nav-link" >
        Events <
        /Link> <
        /li> {
            isAdmin && ( <
                li className = "nav-item" >
                <
                Link to = "/create-event"
                className = "nav-link" >
                Create Event <
                /Link> <
                /li>
            )
        } <
        /ul> <
        /nav>
    );
};

export default Navbar;