'use strict';

import React, { Component } from 'react';

export default class BookList extends Component {

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

    renderList() {
        return this.props.books
            .map(book => <li key={book.title} className="list-group-item">{book.title}</li>);
    }
}