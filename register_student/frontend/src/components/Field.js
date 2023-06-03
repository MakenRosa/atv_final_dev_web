import React from 'react';

const Field = ({ id, label, type, placeholder, options }) => {
  if (type === 'select') {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <select id={id} className="form-control">
          {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
        </select>
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} className="form-control" id={id} placeholder={placeholder} />
      </div>
    );
  }
};

export default Field;
