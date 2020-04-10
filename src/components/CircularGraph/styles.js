import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  h1 {
    text-transform: uppercase;
    font-size: 15px;
    margin-top: 10px;
    color: #404a58;
  }

  svg {
    width: 150px;
    height: 150px;

    .CircularProgressbar-text {
      fill: #404a58;
    }
    .CircularProgressbar-trail {
      stroke: #fff;
    }

    .CircularProgressbar-path {
      stroke: #404a58;
      stroke-linecap: square;
    }
  }
`;
