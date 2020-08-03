import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="collapse navbar-collapse" id="navbarNav">
                
              <Link to="/"><img src="https://res.cloudinary.com/deborahao/image/upload/v1596373598/todolist_icon-removebg-preview_h4jjuy.png" 
              width = "100" height = "60" alt ="Logo of the todo app" className="navbar-brand"/></Link>
            
                <Link to="/" className="navbar-brand text-white">MERN-Stack Todo App</Link>
                    <ul className="navbar-nav mx-auto">
                    
                    <li className="nav-item active">
                        <Link to='/Signup' className="nav-link text-white">Signup</Link>
                    </li>

                    <li className="nav-item active">
                        <Link to='/Login' className="nav-link text-white">Login</Link>
                    </li>
                    
                    <li className="nav-item active">
                        <Link to='/todolist' className="nav-link text-white">To-do List</Link>
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