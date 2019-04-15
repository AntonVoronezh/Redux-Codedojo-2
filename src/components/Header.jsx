import React from 'react';

import Stats from './stats';
import Stopwatch from './stopwatch';

class Header extends React.Component {
	render() {
		const todos = props.store.getState();

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
