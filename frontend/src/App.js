import React from "react";
import { Form } from "@unform/web";

import api from "./services/api";

import Input from "./components/Input";

import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  async function handleSubmit(data, { reset }) {
    const response = await api.post("/sessions", {
      email: data.email
    });

    const { _id } = response.data;
  }

  return (
    <div className='container'>
      <img src={logo} alt='AirCnC' />

      <div className='content'>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para as empresas
        </p>

        <Form onSubmit={handleSubmit}>
          <Input
            name='email'
            id='email'
            placeholder='Seu melhor e-mail'
            label='E-MAIL *'
          />

          <button type='submit' className='btn'>
            Cadastrar
          </button>
        </Form>
      </div>
    </div>
  );
}

export default App;
