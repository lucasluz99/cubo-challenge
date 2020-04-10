import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;

  p {
    color: #6a6a6a;
  }

  h1 {
    color: #404040;
  }
`;

export const Titles = styled.header`
  align-self: center;
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 26px;
  }

  p {
    font-size: 16px;
    max-width: 500px;
    text-align: center;
    margin: 10px auto 0;
  }
`;

export const ServicesList = styled.ul`
  margin-top: 30px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const Service = styled.li`
  display: flex;
  align-items: flex-start;
  width: 50%;
  padding: 30px;
  svg {
    flex-shrink: 0;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    padding: 0;

    h1 {
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  margin-left: 10px;

  h1 {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 22px;
  }

  p {
    font-size: 14px;
    text-align: justify;
  }
`;
