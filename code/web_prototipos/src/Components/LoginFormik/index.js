import React from "react";
import { Formik, Form, Field } from "formik";

const LoginFormik = () => (
  <div>
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <Field type="text" name="username" placeholder="Username"/><br/>
        <Field type="password" name="password" placeholder="Password"/><br/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default LoginFormik;
