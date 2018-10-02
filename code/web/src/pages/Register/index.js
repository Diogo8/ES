import React, { Component } from 'react';
import { FieldArray, Field, Form, Formik } from 'formik';
import Dropzone from 'react-dropzone';
import TagField from 'components/TagField';
import InputField from 'components/InputField';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { signup } from 'actions/auth';
import { Redirect } from 'react-router-dom';

import 'styles/register.css';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required!'),
  email: yup
    .string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: yup
    .string()
    .min(6, 'Password has to be longer than 6 characters!')
    .required('Password is required!'),
  name: yup.string().required('Name is required!'),
  research_area: yup.string().required('Research Area is required!'),
  institution: yup.string().required('Institution is required!'),
  orcid: yup
    .number()
    .typeError('ORCID number must be a number!')
    .required('ORCID number is required!'),
});

class SignUp extends Component {
  state = {
    imageFiles: [],
  };

  onDrop = (setFieldValue, imageFiles) => {
    this.setState({
      imageFiles: imageFiles,
    });
    setFieldValue('avatar', this.state.imageFiles[0]);
  };

  valuesToFormData(values, history, signup) {
    const bodyFormData = new FormData();
    Object.keys(values).map(value => {
      if (value !== 'interests') {
        bodyFormData.append(value, values[value]);
      }
    });

    for (var i = 0; i < values.interests.length; i++) {
      bodyFormData.append('interests[]', values.interests[i]);
    }

    signup(bodyFormData, history);
  }

  render() {
    const {
      props: { history, signup, registerError, registered },
    } = this;
    console.log(this.props);
    return (
      <div>
        {registered === true ? (
          <Redirect to="/profile" />
        ) : (
          <div>
            <body className="wrapper">
            <img id="bg" src={require('assets/register_bg_Prancheta 1.png')} />
              <div className="container">
                <div className="row">
                  <img href="" />
                  <img id="logo" src={require('assets/pando_logotipo.png')} />
                  <h2 id="titulo">Create Your Account</h2>
                  <h6 id="titulo_medio">All fields with a * must be filled out</h6>
                </div>
                <div className="row">
                  <div className="register">
                    <Formik
                      onSubmit={values =>
                        this.valuesToFormData(values, history, signup)
                      }
                      validationSchema={validationSchema}
                      initialValues={{
                        username: '',
                        email: '',
                        interests: '',
                        orcid: '',
                        name: '',
                        research_area: '',
                        institution: '',
                        description: '',
                        avatar: '',
                      }}
                      render={({ setFieldValue }) => (
                        <div>
                          <Form>
                            <div className="row">
                              <div className="one-half column form-wrapper">
                                <Field
                                  name="username"
                                  type="text"
                                  component={InputField}
                                  label="Username *"
                                  placeholder="Enter your username"
                                />
                                <Field
                                  name="email"
                                  type="text"
                                  component={InputField}
                                  label="Email *"
                                  placeholder="Enter your e-mail"
                                />
                                <Field
                                  name="orcid"
                                  type="text"
                                  component={InputField}
                                  label="ORCID Number *"
                                  placeholder="Enter your ORCID number"
                                />
                                <Field
                                  name="password"
                                  type="password"
                                  component={InputField}
                                  label="Password *"
                                  placeholder="Enter your password"
                                />
                                <h5>Detailed Info</h5>
                                <Field
                                  name="name"
                                  type="text"
                                  component={InputField}
                                  label="Name *"
                                  placeholder="Enter your name"
                                />
                                <Field
                                  name="research_area"
                                  type="text"
                                  component={InputField}
                                  label="Research Area *"
                                  placeholder="Enter your subject"
                                />
                                <Field
                                  name="institution"
                                  type="text"
                                  component={InputField}
                                  label="Institution *"
                                  placeholder="Enter the name of your institution"
                                />
                                <FieldArray
                                  name="interests"
                                  component={props => (
                                    <TagField {...props} label="Interests" />
                                  )}
                                />
                                {registerError ? <p>{registerError}</p> : null}
                                </div>
                                <div className="one-half column">
                                  <div className="register_image"></div>
                                  <div className="row">
                                    <Dropzone
                                      onDrop={ev => this.onDrop(setFieldValue, ev)}
                                      multiple={false}
                                    >
                                      <div>
                                        {this.state.imageFiles.length > 0 && (
                                          <div>
                                            <div>
                                              {this.state.imageFiles.map(file => (
                                                <img
                                                  id="avatar"
                                                  src={file.preview}
                                                />
                                              ))}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </Dropzone>
                                    </div>
                                    <div id="description_container">
                                    <Field
                                      name="description"
                                      type="textarea"
                                      component={InputField}
                                      label="Description"
                                    />
                                    </div>
                                
                              </div>
                              
                            </div>
                            <div className="four column offset-by-four u-center-block">
                                  <button type="submit">Confirm Registration</button>
                                </div>
                          </Form>
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
            </body>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: creds => dispatch(signup(creds)),
  };
};

const mapStateToProps = state => {
  return {
    registered: state.register.registered,
    registerError: state.register.registerError,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
