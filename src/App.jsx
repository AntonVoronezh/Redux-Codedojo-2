import React from 'react';

import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

function App({ store }) {

	return (
		<main>
			<Header store={store} />

			<List store={store} />

			<Form store={store} />
		</main>
	);
}

export default App;
