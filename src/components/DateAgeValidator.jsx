import React from "react";
import ErrorMessage from "./ErrorMessage";

const DateAgeValidator = ({ value }) => {
  const currentDate = new Date();
  const selectedDate = new Date(value);
  const diffYears = Math.floor(
    (currentDate - selectedDate) / (1000 * 60 * 60 * 24 * 365.25)
  );
  const diffDate = currentDate - selectedDate;

  console.log("разница: " + diffYears + " лет");
  console.log("date now: " + currentDate);
  console.log("date selected: " + selectedDate);
  console.log("difff: " + diffDate);

  if (diffYears < 18) {
    return <ErrorMessage message="Сотруднику не может быть менее 18 лет" />;
  }
  return null;
};

export default DateAgeValidator;
