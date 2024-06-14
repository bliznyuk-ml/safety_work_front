export const validateFormEmployee = (fields, formData) => {
  const emptyFieldError = isFieldsEmpty(fields);
  const employeeAgeError = isEmployeeAdult(formData);
  const instructionDateError = isDataInstructionValid(formData);

  if (emptyFieldError || employeeAgeError || instructionDateError) {
    return emptyFieldError || employeeAgeError || instructionDateError;
  } else {
    return "";
  } // Форма валидна
};

const isFieldsEmpty = (fields) => {
  for (const field of fields) {
    if (!field.value.trim()) {
      return `Поле "${field.label}" не заполнено`;
    }
  }
};

const isEmployeeAdult = (formData) => {
  if (formData.birthday) {
    const currentDate = new Date();
    const selectedDate = new Date(formData.birthday);
    const diffYears = Math.floor(
      (currentDate - selectedDate) / (1000 * 60 * 60 * 24 * 365.25)
    );
    console.log(diffYears);
    if (diffYears < 18) {
      return "Сотруднику не может быть менее 18 лет";
    }
  }
};

const isDataInstructionValid = (formData) => {
  if (formData.instruction) {
    const currentDate = new Date();
    const selectedDate = new Date(formData.instruction);
    if (selectedDate > currentDate)
      return "Дата инструктажа не может быть позднее сегодняшней";
  }
};

export const cheсk = () => {
  console.log("cheсk method");
};
