import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Todo extends Component {
    render() { 
        return ( 
            <div>
                <tr>
                    <td className={this.props.todo.todo_completed ? 'completed' : ''}> {this.props.todo.todo_description} </td>
                    <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_responsible}</td>
                    <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
                    <td>
                        <Link to={"/edit/"+ this.props.todo._id} className='btn btn-info'>Edit</Link>
                        
                        <Link to ='/'  className='btn btn-info' onClick={() => {
                        this.props.deleteTodo(this.props.todos._id)} } >Delete</Link> 
                    </td>
                </tr>
            </div>
         );
    }
}
 
export default Todo;