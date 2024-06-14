import React from "react";

const DateInput = ({ name, value, onCange }) => {
  return <input type="date" name={name} value={value} onChange={onCange} />;
};

export default DateInput;
