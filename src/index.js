'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import YTearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBlrpOxVV2_zY6fJUZ4o6i9MknyExVoEUI';

YTearch({
    key : API_KEY,
    term : 'surfboards'
}, console.log);

// Create a new component. This component should produce some HTML.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));