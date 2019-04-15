import React from 'react';

import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;

    }



    render() {

        return (
            <main>
                <Header store={this.store} />

                <List store={this.store} />

                <Form store={this.store} />
            </main>
        );
    }
}



export default App;
