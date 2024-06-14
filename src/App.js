import "./App.css";
import React, { useEffect } from "react";
import RegistrationForm from "./components/RegistrationForm";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />

      <h1>Form</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;
