import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const Logo = styled.img`
  width: 120px;

  @media (max-width: 600px) {
    width: 150px;
  }
`;

export const Menu = styled.nav`
  @media (max-width: 600px) {
    display: none;
  }
  ul {
    list-style: none;
    display: flex;
    li:first-child {
      background: #ec9900;
    }
    li {
      text-transform: uppercase;
      font-size: 14px;
      cursor: pointer;
      padding: 10px;
      margin-left: 5px;
      transition: background 150ms linear;

      &:hover {
        background: #ec9900;

        a {
          color: #fff;
        }
      }

      a {
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
