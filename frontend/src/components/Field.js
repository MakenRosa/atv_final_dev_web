import React from 'react';

const Field = ({ id, label, type, placeholder, options, disabled, trash, className, value, onChange }) => {
  if (type === 'select') {
    return (
      <div>
        <label className={className} htmlFor={id}>{label}</label>
        <select id={id} className={"form-control" + (className && className)} disabled={disabled} value={value} onChange={onChange}>
          {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
        </select>
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor={id} className={className}>{label}</label>
        <input type={type} className={"form-control" + (className && className)} id={id} placeholder={placeholder} disabled={disabled} value={value} onChange={onChange} />
        {trash && <i className="fas fa-trash"></i>}
      </div>
    );
  }
};

export default Field;
