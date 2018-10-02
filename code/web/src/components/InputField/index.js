import React from 'react';

const InputField = ({ label, field, form: { touched, errors }, ...props }) => (
  <div>
    <label>{label}</label>
    <input type="text" {...field} {...props} />
    {touched[field.name] &&
      errors[field.name] && <div className="error">{errors[field.name]}</div>}
    <br />
  </div>
);

export default InputField;
