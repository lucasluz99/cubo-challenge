import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-top: 30px;
  h1 {
    text-transform: uppercase;
    color: #404040;
  }
  svg {
    min-width: 40px;
  }
  > h1 {
    margin-bottom: 30px;
    font-size: 26px;
  }

  a {
    border: 0;
    background-color: #b5e83f;
    padding: 10px 20px;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
  }

  @media (max-width: 1150px) {
    .arrow {
      transform: rotate(90deg);
      transform-origin: center;
      margin: 20px 0;
    }
  }
`;

export const Steps = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  min-width: 200px;
  text-align: center;
  align-items: center;

  h1 {
    margin: 10px 0px;
    font-size: 20px;
  }
  p {
    max-width: 200px;
    color: #6a6a6a;
    font-size: 15px;
  }

  @media (max-width: 1150px) {
    p {
      max-width: 90%;
      margin: 0 auto;
    }
  }
`;
