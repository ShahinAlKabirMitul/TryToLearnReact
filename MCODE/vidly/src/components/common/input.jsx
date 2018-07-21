import React from 'react';
const Input = ({ name, lable, value, onChnage }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input
        value={value}
        onChange={onChnage}
        name={name}
        autoFocus
        id={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
