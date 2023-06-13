import React from "react";
import Field from "./Field";
import "../styles/CadastroFrequencia.css";

const FieldTurma = ({ onChange, disabled, className, options, value }) => {

  return (
    <Field
      id="turma"
      label="Turma"
      type="select"
      placeholder="Selecione a turma"
      options={options}
      value={value}
      onChange={onChange}
      disabled={disabled}
      labelWidth={"10%"}
      fieldWidth={"4%"}
      className={className}
    />
  );
};

export default FieldTurma;