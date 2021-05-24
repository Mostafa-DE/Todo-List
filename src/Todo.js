import React, { Component } from 'react'
import './Todo.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            textUpdate: this.props.text
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleDelete() {
        this.props.deleteTodo(this.props.id)
    }

    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    handleUpdate(evnt) {
        evnt.preventDefault();
        this.props.updatedTodo(this.props.id , this.state.textUpdate);
        this.setState({isEditing: false})
    }

    handleChange(evnt) {
        this.setState({
            [evnt.target.name]: evnt.target.value
        })
    }

    handleToggle(evnt) {
      this.props.toggleTodo(this.props.id);
    }

  render() {
      let result;
      if(this.state.isEditing){
          result = 
          <div className='Todo'>
              <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                  <input type='text' value={this.state.textUpdate} name='textUpdate' onChange={this.handleChange} />
                  <button><i class="far fa-plus-square"></i></button>
              </form>
          </div>
      }else{
          result = 
          <div className="Todo">
            <li className={this.props.completed ? 'Todo-text completed' : 'Todo-text' } onClick={this.handleToggle}>{this.props.todoText}</li>

          <div className="Todo-btns">
              <button onClick={this.toggleForm} className="edit-btn"><i class="far fa-edit"></i></button>
              <button onClick={this.handleDelete} className="trash-btn"><i class="far fa-trash-alt"></i></button>
          </div>
        </div>
      }
    return result;
  }
}

export default Todo;