'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {

    render() {
        return (
            <div>Posts index</div>
        );
    }

    componentDidMount() {
        this.props.fetchPosts();
    }
}

export default connect(null, { fetchPosts })(PostsIndex);