import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className} >
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.createStream(formValues);
        formValues = ''
    }

    render() {

        return (
            <div>
                <form
                    className="ui form error"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field
                        name="title"
                        component={this.renderInput}
                        label="Title:"
                    />
                    <Field
                        name="description"
                        component={this.renderInput}
                        label="Description"
                    />
                    <button className="ui button basic violet">Create</button>
                </form>

            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'Enter title'
    }

    if (!formValues.description) {
        errors.description = 'Enter description'
    }
    return errors;
};


const fromWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

export default connect(null, { createStream })(fromWrapped)
