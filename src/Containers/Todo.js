import React, { Component } from 'react';
import TodoItem from '../Components/TodoItem/TodoItem';

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            checked: false,
            listInput: ''
        }
    }

    handleInputChange = (event) => {
        const listInput = event.target.value;

         this.setState({
             listInput
         })
    }

    handleItem = event => {
        event.preventDefault();
        const newItem = this.state.listInput;

        if(newItem !== '') {
            console.log(newItem)
            const items = [...this.state.list, newItem]
            this.setState({
                list: items,
                listInput: ''
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleItem}>
                    <input type="text" placeholder="todo list" onChange={this.handleInputChange}/>
                    <button type="submit">Add Task</button>
                </form>
                <TodoItem list={this.state.list}/>

            </div>
        )
    }
}

export default Todo;
