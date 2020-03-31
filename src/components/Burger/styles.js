import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const Items = styled.ul`
  background: #ec9900;
  overflow: hidden;
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  li {
    font-size: 20px;
    padding: 10px 0;

    a {
      color: #fff;
      font-size: 18px;
      text-decoration: none;
      font-family: 'Roboto' sans-serif;
    }
  }

  @media (max-width: 600px) {
    transform: ${(props) =>
      props.menuOpen ? 'translateY(calc(0% + 100px))' : 'translateY(-100%)'};
    transition: transform 200ms linear;
  }
`;

export const Icon = styled.button`
  @media (max-width: 600px) {
    background: 0;
    border: 0;
  }
`;
