import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import InputIcon from '../InputIcon';
import Wrapper from '../Wrapper';
import { Container, Texts, Formik, InputWrapper } from './styles';

export default function Form() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é Obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('Email é Obrigatório'),
    phone: Yup.string().required('Telefone é Obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: schema,
  });
  return (
    <Container>
      <Wrapper>
        <Texts>
          <h1>Cadastre-se</h1>
          <p>Lorem ipsum dolor sit amet consectetur iure non est</p>
        </Texts>
        <Formik onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <InputIcon
              type="text"
              id="name"
              name="name"
              icon="user"
              placeholder="Nome"
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <h2>{formik.errors.name}</h2>
            )}
          </InputWrapper>
          <InputWrapper>
            <InputIcon
              type="email"
              id="email"
              name="email"
              icon="email"
              placeholder="Email"
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <h2>{formik.errors.email}</h2>
            )}
          </InputWrapper>
          <InputWrapper>
            <InputIcon
              type="text"
              id="phone"
              name="phone"
              icon="phone"
              placeholder="Telefone"
              onChange={formik.handleChange}
            />
            {formik.errors.phone && formik.touched.phone && (
              <h2>{formik.errors.phone}</h2>
            )}
          </InputWrapper>
          <button type="submit">Enviar</button>
        </Formik>
      </Wrapper>
    </Container>
  );
}
