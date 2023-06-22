import React from 'react';
import Field from './Field';
import "../styles/CadastroFrequencia.css"

const FieldTurma = ({ disabled, className }) => {
  return (
    <Field 
      id="turma" 
      label="Turma" 
      type="select" 
      placeholder="Selecione a turma" 
      options={['1º ano', '2º ano', '3º ano', '4º ano', '5º ano']}
      disabled={disabled}
      labelWidth={'10%'}
      fieldWidth={'4%'}
      className={className}
    />
  );
};

export default FieldTurma;
