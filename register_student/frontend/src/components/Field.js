import React from 'react';

const Field = ({ id, label, type, placeholder, options, disabled }) => {
  if (type === 'select') {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <select id={id} className="form-control" disabled={disabled}>
          {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
        </select>
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} className="form-control" id={id} placeholder={placeholder} disabled={disabled} />
      </div>
    );
  }
};

export default Field;
