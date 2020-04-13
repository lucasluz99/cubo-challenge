import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  padding: 30px 0;
  background-color: #00b8e2;
`;

export const Formik = styled.form`
  display: flex;
  justify-content: space-between;

  button {
    border: 1px solid #fff;
    color: #fff;
    font-weight: bold;
    background: none;
    font-size: 18px;
    width: 100px;
    height: 40px;
    text-transform: uppercase;
  }
`;

export const Texts = styled.div`
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
  h1 {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 26px;
  }

  p {
    max-width: 500px;
    font-size: 16px;
    margin: 0 auto;
  }
`;
