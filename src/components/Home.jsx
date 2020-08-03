import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../index.css'

class Home extends Component {

    render() { 
        return ( 
            <div>
                 
                <header className="masthead d-flex">
                    <div className="container text-center my-auto">
                    <h1 className="mb-1">To-Do List</h1>
                    <h3 className="mb-5">
                        <em>A free app built by Aanyu Deborah Oduman</em>
                    </h3>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                    </div>
                    <div className="overlay"></div>
                </header>
        
                <section className="content-section bg-light" id="about">
                    <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                        <h2>We organise your tasks and ease your work.</h2>
                        <p className="lead mb-5">Sign up with To-do list today to get started!</p>
                        <Link to='/Signup' className="btn btn-dark btn-xl js-scroll-trigger" >Sign Up</Link>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="content-section bg-info text-white">
                    <div className="container text-center">
                        <h2 className="mb-4">Already have an account? Login to create new Todo List</h2>
                        <Link to='/Login' className="btn btn-xl btn-light mr-4">Login</Link>
                    </div>
            </section>
            </div>
         );
    }
}
 
export default Home;