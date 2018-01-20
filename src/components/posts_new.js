'use strict';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title"
                    label="Title for Post"
                    component={this.renderField} />

                <Field name="categories"
                    label="Categories"
                    component={this.renderField} />

                <Field name="content"
                    label="Post Content"
                    component={this.renderField} />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }

    renderField(field) {
        const { meta : { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input type="text" {...field.input} className="form-control" />
                
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
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