'use strict';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    render() {
        return (
            <form>
                <Field name="title"
                    component={this.renderTitleField} />
            </form>
        );
    }

    renderTitleField(field) {
        return (
            <div>
                <input type="text" {...field.input} />
            </div>
        );
    }
}

export default reduxForm({ form : 'PostsNewForm' })(PostsNew);