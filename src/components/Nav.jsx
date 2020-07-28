import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                    
                    <li className="nav-item active">
                        <Link to='/' className="nav-link text-white">To-do List</Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/create' className="nav-link text-white" >Create To-do</Link>
                    </li>
                   
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Nav;