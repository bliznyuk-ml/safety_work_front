import React from "react";

const FormField = ({ name, value, onChange }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={"Enter " + name}
    />
  );
};

export default FormField;
