import React, { Fragment } from 'react';

 const Input = ({label, handler, value, name}) =>
    <Fragment>
    <label>{label}</label>
      <input
        name={name}
        className="form-control"
        required={true}
        onChange={handler}
        value={value} />
    </Fragment>

export default Input;