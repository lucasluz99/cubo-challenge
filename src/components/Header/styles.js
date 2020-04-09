import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`;

export const Logo = styled.img`
  width: 170px;

  @media (max-width: 800px) {
    width: 110px;
  }
`;

export const Menu = styled.nav`
  @media (max-width: 800px) {
    display: none;
  }
  ul {
    list-style: none;
    display: flex;
    li:first-child {
      background: #ec9900;
      margin-left: 0;
    }
    li {
      text-transform: uppercase;
      font-size: 14px;
      cursor: pointer;
      margin-left: 20px;
      transition: background 150ms linear;

      &:hover {
        background: #ec9900;

        a {
          color: #fff;
        }
      }

      a {
        padding: 10px 18px;
        display: block;
        font-size: 16px;
        text-decoration: none;
        color: #807b7b;
      }

      a.first {
        color: #fff;
      }
    }
  }
`;
