import React from 'react';

import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import {addTodo, deleteTodo, editTodo, toggleTodo} from './actions/index.js'

class App extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     todos: this.props.initialData
        // };

        this.store = this.props.store;
        // this._nextId = this.state.todos.length;
        
        this.handleAdd = this.handleAdd.bind(this);

    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    // nextId() {
    //     return this._nextId += 1;
    // }

    handleAdd(title) {
        this.store.dispatch(addTodo(title));
    }



    render() {
        const todos = this.store.getState();

        return (
            <main>
                <Header todos={todos} />

                <List
                    todos={todos}
                    onDelete={this.handleDelete}
                    onToggle={this.handleToggle}
                    onEdit={this.handleEdit}
                />

                <Form onAdd={this.handleAdd} />
            </main>
        );
    }
}



export default App;
