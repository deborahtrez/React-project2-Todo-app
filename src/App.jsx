import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import CreateTodo from './components/CreateTodo'
import EditTodo from './components/EditTodo'
import TodosList from './components/TodosList'
import Nav from './components/Nav'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import './index.css'

class App extends Component {
   
    render() { 
        return ( 
            <BrowserRouter>    
            <Route path ="/" exact component ={Home} />   
                <Nav />
                <div className="container">
                    <Route path ="/todolist" component = {TodosList} />
                    <Route path ="/edit/:id" component = {EditTodo} />
                    <Route path ="/create" component = {CreateTodo} />
                    <Route path ="/signup" component = {Signup} />
                    <Route path ="/login" component ={Login} />
                </div>
            </BrowserRouter>
         );
    }
}
 
export default App;