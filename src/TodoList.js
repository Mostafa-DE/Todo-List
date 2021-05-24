import React, { Component } from 'react'
import './TodoList.css';
import CreateNewTodo from './CreateNewTodo';
import Todo from './Todo';
// import uuid from "uuid/dist/v4";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Todos: []
        }
        this.createTodo = this.createTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    createTodo(newTodo) {
        this.setState({
            Todos: [...this.state.Todos , newTodo]
        });
    }

    deleteTodo(id)  {
        this.setState({
            Todos: this.state.Todos.filter(todo => todo.id !==id)
        });
    }

    updateTodo(id , updatedText) {
        const updatedTodo = this.state.Todos.map(todo => {
            if(todo.id === id) {
                return {...todo, text: updatedText}
            }
            return todo;
        })
        this.setState({Todos: updatedTodo});
    }

    toggleCompletion(id){
        const updatedTodo = this.state.Todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        })
        this.setState({Todos: updatedTodo});
    }


  render() {
      const Todos = this.state.Todos.map(todo => (
         <li><Todo 
                key={todo.id} 
                text={todo.text} 
                todoText={todo.text}
                completed={todo.completed} 
                id={todo.id} 
                deleteTodo={this.deleteTodo} 
                updatedTodo={this.updateTodo}
                toggleTodo={this.toggleCompletion}
                /></li> 
      ));
    return(
      <div className="TodoList">
            <h1>Todo List !!<span>By Mostafa Fayyad :)</span> </h1>
            <ul>{Todos}</ul>
            < CreateNewTodo addTodo={this.createTodo} />
         

      </div>
    );
  }
}

export default TodoList;