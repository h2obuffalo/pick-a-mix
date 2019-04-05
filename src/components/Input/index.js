import React, { Fragment } from 'react';

 const Input = ({label, handler, value, name, required, type}) =>
    <Fragment>
    <label>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        required={required}
        onChange={handler}
        value={value} />
    </Fragment>

export default Input;