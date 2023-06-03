import React from 'react';
import Field from './Field';

const FieldTurma = () => {
  return (
    <Field 
      id="turma" 
      label="Turma" 
      type="select" 
      placeholder="Selecione a turma" 
      options={['1º ano', '2º ano', '3º ano', '4º ano', '5º ano']} 
    />
  );
};

export default FieldTurma;
