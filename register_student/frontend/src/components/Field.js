import React from 'react';

const Field = ({ id, label, type, placeholder, options, disabled, trash, className}) => {
  if (type === 'select') {
    return (
      <div>
        <label className={className} htmlFor={id}>{label}</label>
        <select id={id} className={"form-control" + className && className} disabled={disabled}>
          {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
        </select>
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor={id} className={className}>{label}</label>
        <input type={type} className={"form-control" + className && className} id={id} placeholder={placeholder} disabled={disabled} />
        {trash && <i className="fas fa-trash"></i>}
      </div>
    );
  }
};

export default Field;
