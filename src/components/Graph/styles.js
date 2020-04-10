import styled from 'styled-components';

export const Box = styled.div``;

export const Percent = styled.div`
  transition: 250ms ease-in-out;
  padding: 20px;
  position: relative;

  h1 {
    transition: 250ms ease-in-out;
  }
  &:hover {
    transform: translateY(-20px);
    h1 {
      font-size: 40px;
    }
  }
  svg {
    position: relative;
    width: 150px;
    height: 150px;
    z-index: 1000;

    circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke: #fff;
      stroke-width: 7;
      stroke-linecap: round;
      transform: translate(5px, 5px);
    }

    circle:nth-child(2) {
      stroke-dasharray: 440;
      stroke-dashoffset: ${(props) =>
        `calc(440 - (440 * ${props.percent}) / 100)`};
      stroke-linecap: butt;
      stroke: #404a58;
    }
  }
  h1,
  h2 {
    color: #404a58;
  }
  div {
    > h1 {
      font-size: 26px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  h2 {
    margin-top: 10px;
    position: absolute;
    text-transform: uppercase;
    font-size: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
