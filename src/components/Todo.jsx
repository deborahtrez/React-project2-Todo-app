import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Todo extends Component {
    render() { 
        return ( 
            // <tbody>
            //     <table className='table'>
            //         <thead className='thead-dark'>
                        <tr>
                            <td className={this.props.todo.todo_completed ? 'completed' : ''}> {this.props.todo.todo_description} </td>
                            <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_responsible}</td>
                            <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
                            <td>
                                <Link to={"/edit/"+ this.props.todo._id} className='btn btn-info'>Edit</Link>
                                
                                <a href="/#"  className='btn btn-info' onClick={() =>{this.props.deleteTodo(this.props.todo._id)} }>Delete</a> 
                            </td>
                        </tr>
            //         </thead>
            //     </table>
            // </tbody>
         );
    }
}
 
export default Todo;