import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBltuuzWz2M8NKwUKxfGP9HRr3GHfHMm_k';
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		);
}

ReactDOM.render(<App />, document.querySelector('.container'));