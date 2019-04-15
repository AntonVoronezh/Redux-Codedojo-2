import React from 'react';

import Stats from './stats';
import Stopwatch from './stopwatch';

class Header extends React.Component {
    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

	render() {
		const todos = this.props.store.getState();

		return (
			<header>
				<Stats todos={todos} />
				<h1>Redux Todo</h1>
				<Stopwatch />
			</header>
		);
	}
}

export default Header;
