import React from 'react';

import { useFormik } from 'formik';

import InputIcon from '../InputIcon';
import Wrapper from '../Wrapper';
import { Container, Texts, Formik } from './styles';

export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Container>
      <Wrapper>
        <Texts>
          <h1>Cadastre-se</h1>
          <p>Lorem ipsum dolor sit amet consectetur iure non est></p>
        </Texts>
        <Formik onSubmit={formik.handleSubmit}>
          <InputIcon
            type="text"
            id="name"
            name="name"
            icon="user"
            placeholder="Nome"
            onChange={formik.handleChange}
          />
          <InputIcon
            type="email"
            id="email"
            name="email"
            icon="email"
            placeholder="Email"
            onChange={formik.handleChange}
          />
          <InputIcon
            type="text"
            id="phone"
            name="phone"
            icon="phone"
            placeholder="Telefone"
            onChange={formik.handleChange}
          />

          <button type="submit">Enviar</button>
        </Formik>
      </Wrapper>
    </Container>
  );
}
