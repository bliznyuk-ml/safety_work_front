import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <p
      style={{
        width: "200px",
        margin: "auto",
        marginTop: "5px",
        backgroundColor: "red",
        color: "black",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {message}
    </p>
  );
};

export default ErrorMessage;
