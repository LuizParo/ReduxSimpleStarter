'use strict';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    render() {
        return (
            <form>
                <Field name="title"
                    label="Title for Post"
                    component={this.renderField} />

                <Field name="categories"
                    label="Categories"
                    component={this.renderField} />

                <Field name="content"
                    label="Post Content"
                    component={this.renderField} />
            </form>
        );
    }

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input type="text" {...field.input} className="form-control" />
                {field.meta.error}
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = 'Enter a title!';
    }

    if (!values.categories) {
        errors.categories = 'Enter some categories!';
    }

    if (!values.content) {
        errors.content = 'Enter some content please!';
    }

    // If errors is empty, the form is fine to submit
    // If error has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({ 
    form : 'PostsNewForm',
    validate
})(PostsNew);