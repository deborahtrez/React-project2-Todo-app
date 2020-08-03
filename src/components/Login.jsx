import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeemail =(event) =>{
        this.setState({ email: event.target.value})
    }
    onChangepassword =(event) =>{
        this.setState({ password: event.target.value})
    }
    onSubmit =(event) => {
        event.preventDefault()
        
        const login = { 
            email: this.state.email,
            password: this.state.password
         }

        axios.post('http://localhost:8000/auth/login', + this.props.match.params.id, login)
        .then(response => console.log(response.data))

        this.props.history.push('/todolist')
    }

    render() { 
        return ( 
            <div style={{ marginTop: 40 }}>
                <h2 style={{ marginBottom: 40 }}>Login</h2>

                <form action="" onSubmit={this.onSubmit} className="container shadow p-3 mb-5 bg-white rounded " >

                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email}
                                onChange={this.onChangeemail} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" password value={this.state.password} 
                                onChange={this.onChangepassword} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
         );
    }
}
export default Login;