import React, { Component } from 'react';
import axios from 'axios'

class Signup extends Component {
    constructor(props){
        super(props)

        this.state = {
            fullName: '',
            gender: '',
            email: '',
            password: ''
        }
    }

    onChangefullName =(event) =>{
        this.setState({ fullName: event.target.value})
    }
    onChangegender =(event) =>{
        this.setState({ gender: event.target.value})
    }
    onChangeemail =(event) =>{
        this.setState({ email: event.target.value})
    }
    onChangepassword =(event) =>{
        this.setState({ password: event.target.value})
    }

    onSubmit =(event) =>{
        event.preventDefault()

        const newUser = {
            fullName: this.state.fullName,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:8000/auth/signup', newUser)
        .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            gender: '',
            email: '',
            password: ''
        })

        this.props.history.push('/Login')
    }

    render() { 
        return ( 
            <div style={{ marginTop: 40 }}>
                <h2 style={{ marginBottom: 40 }}>Signup</h2>

                <form action="" className="container shadow p-3 mb-5 bg-white rounded " onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label for="exampleInputPassword1"> Full Name</label>
                        <input type="text" className="form-control" value={this.state.fullName} onChange={this.onChangefullName}/>
                    </div>

                    <div className ="form-group">
                        <div class="maxl">
                            <label class="radio inline"> 
                                <input type="radio" name="gender" value="male" checked={this.state.gender==='male'} onChange={this.onChangegender}/>
                                <span> Male </span> 
                            </label> <br />
                            <label class="radio inline"> 
                                <input type="radio" name="gender" value="female" checked={this.state.gender==='female'} onChange={this.onChangegender}/>
                                <span> Female </span> 
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                value={this.state.email} onChange={this.onChangeemail}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} 
                                onChange={this.onChangepassword}/>
                    </div>

                    {/* <div class="form-group">
                        <label for="exampleInputPassword1">Confirm Password *</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={this.state.password} 
                                onChange={this.onChangepassword}/>
                    </div> */}


                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
         );
    }
}
export default Signup;