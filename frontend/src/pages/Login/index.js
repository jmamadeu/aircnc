import React from "react";
import { Form } from "@unform/web";

import api from "../../services/api";
import Input from "../../components/Input";

export default function Login({ history }) {
  async function handleSubmit(data, { reset }) {
    const response = await api.post("/sessions", {
      email: data.email
    });

    const { _id } = response.data;

    localStorage.setItem("user", _id);

    reset();

    history.push("/dashboard");
  }

  return (
    <>
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
    </>
  );
}
