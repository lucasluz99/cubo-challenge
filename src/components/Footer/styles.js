import styled from 'styled-components';

export const Container = styled.footer`
  border-top: 1px solid #828282;
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
export const Texts = styled.div`
  color: #828282;

  h1 {
    text-transform: uppercase;
    font-size: 16px;
  }
  p {
    font-size: 15px;
  }
`;
export const SocialMidia = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 220px;
  a {
    transition: opacity 200ms linear;
    color: #404040;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Copyright = styled.div`
  background-color: #828282;
  padding: 20px 0;
  text-align: center;
  color: #fff;
  font-size: 16px;
`;
