import "./App.css";
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
   <AuthProvider>
      <BrowserRouter>
      <Header />
      <Navbar />
      <Content />

      <h1>Form</h1>
      <RegistrationForm />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
