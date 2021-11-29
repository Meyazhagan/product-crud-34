import React from "react";

function CheckInput({ name, label, ...rest }) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={name}
        name={name}
        {...rest}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default CheckInput;
