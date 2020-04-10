import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 50px;

  img {
    width: 50%;
    background: #ccc;
  }

  @media (max-width: 800px) {
    flex-wrap: wrap;
    img {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  width: 50%;
  background: #ffc40c;
  color: #fff;
  padding: 50px 50px 50px 30px;

  @media (max-width: 800px) {
    width: 100%;
    padding: 30px;
  }
`;

export const Text = styled.div`
  h1 {
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  p {
    max-width: 600px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (max-width: 800px) {
    h1 {
      text-align: center;
    }
  }
`;

export const Graphs = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    > div {
      width: 200px;
      margin-bottom: 10px;
    }
  }
`;
