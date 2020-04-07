import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const Items = styled.ul`
  background: #ec9900;
  z-index: 1000;
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding-top: 10px;
  li {
    font-size: 20px;
    margin-bottom: 15px;
    width: 100%;
    a {
      color: #fff;
      font-size: 18px;
      display: block;
      padding: 10px;
      text-decoration: none;
      font-family: 'Roboto' sans-serif;
    }
  }

  @media (max-width: 800px) {
    transform: ${(props) =>
      props.menuOpen ? 'translateY(calc(0% + 90px))' : 'translateY(-100%)'};
    transition: transform 200ms linear;
  }
`;

export const Icon = styled.button`
  @media (max-width: 800px) {
    background: 0;
    border: 0;
  }
`;
