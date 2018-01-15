'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBlrpOxVV2_zY6fJUZ4o6i9MknyExVoEUI';

// Create a new component. This component should produce some HTML.
class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            videos : [],
            selectedVideo : null
        };
        
        YTSearch({ key : API_KEY, term : 'surfboards' }, videos => {
            this.setState({ 
                videos,
                selectedVideo : videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
};

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));