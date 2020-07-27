import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import CreateTodo from './components/CreateTodo'
import EditTodo from './components/EditTodo'
import TodosList from './components/TodosList';
import Nav from './components/Nav'

class App extends Component {
    render() { 
        return ( 
            <BrowserRouter>
                <Nav />
                <div className="container">
                    <Route path ="/" exact component = {TodosList} />
                    <Route path ="/edit/:id" component = {EditTodo} />
                    <Route path ="/create" component = {CreateTodo} />
                </div>
            </BrowserRouter>
         );
    }
}
 
export default App;