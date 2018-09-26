import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{ name:'', username: '',orcid_id:'', password: '',repeated_password:'' }}
          onSubmit={values => {console.log(values);
                                this.props.history.push('/login');} 
                    }
        >
          <Form>
            <Field type='text' name='name' placeholder='Name' /><br />
            <Field type='text' name='orcid_id' placeholder='ORCID Identifier' /><br />
            <Field type='text' name='username' placeholder='Username' /><br />
            <Field type='password' name='password' placeholder='Password' /><br />
            <Field type='password' name='repeated_password' placeholder='Repeat Password' /><br />
            <button type='submit'>Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
}
