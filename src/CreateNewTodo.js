import React, { Component } from 'react'
import './CreateNewTodo.css';
import uuid from "uuid/dist/v4";

class CreateNewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evnt) {
        this.setState({[evnt.target.name]: evnt.target.value});
    }

    handleSubmit(evnt) {
        evnt.preventDefault();
        const newTodo = {...this.state , id: uuid(), completed: false}
        this.props.addTodo(newTodo);
        this.setState({text: ''});
    }


  render() {
    return(
      <div>
          <form className="NewTodoForm" onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor='text'>New Todo</label><br/>
                <input 
                    name="text" 
                    id='text' 
                    type="text" 
                    placeholder="Reading"
                    value={this.state.text} 
                    onChange={this.handleChange} 
                    />
                
              </div>
              <button className="AddTodo-btn"><i class="far fa-plus-square"></i></button>
          </form>
      </div>
    );
  }
}

export default CreateNewTodo;