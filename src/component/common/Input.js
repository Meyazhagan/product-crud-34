import React from "react";

function Input({ label, name, error, ...rest }) {
  return (
    <div className="form-floating mb-3">
      <input
        type="text"
        className="form-control"
        id={name}
        name={name}
        placeholder="placeHolder"
        {...rest}
      />
      <label htmlFor="floatingInput">{label}</label>
      {error && <div className="text-danger small">{error}</div>}
    </div>
  );
}

export default Input;
