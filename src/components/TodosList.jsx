import React, { Component } from 'react';
import axios from 'axios'
import Todo from './Todo'
import '../index.css'
class TodosList extends Component {
    constructor(props){
        super(props)
        this.state = {todos: []}
    }

    componentDidMount() {
        axios.get('http://localhost:8000/todos/')
            .then(response => {
                this.setState({ todos: response.data })
            })
            .catch(error => console.log(error))
    }

    deleteTodo(id) {
        axios.delete('http://localhost:8000/todos/'+ id)
            .then(response => console.log(response.data))
        this.setState({ todos: this.state.todos.filter(deletedTodo => deletedTodo._id !==id)
        })
    }

    todoList() {
        return this.state.todos.map(currentTodo => {
            return <Todo todo={currentTodo}
                            deleteTodo = {this.deleteTodo}
                            key = {currentTodo._id} />
        })
    }

    render() { 
        return ( 
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default TodosList;