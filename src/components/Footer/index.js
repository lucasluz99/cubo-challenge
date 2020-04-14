import React from 'react';

import {
  FaFacebookF,
  FaGooglePlus,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import Wrapper from '../Wrapper';

import {
  Container,
  Texts,
  SocialMidia,
  Copyright,
  FooterWrapper,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <FooterWrapper>
          <Texts>
            <h1>Cubo</h1>
            <p>Rua Guilhermino de Freitas Jatobá,146</p>
            <p>40296542 - Salvador - BA</p>
          </Texts>
          <SocialMidia>
            <a href="/" title="Facebook">
              <FaFacebookF size={40} />
            </a>
            <a href="/" title="Email">
              <FaGooglePlus size={40} />
            </a>
            <a href="/" title="Twitter">
              <FaTwitter size={40} />
            </a>
            <a href="/" title="Youtube">
              <FaYoutube size={40} />
            </a>
          </SocialMidia>
        </FooterWrapper>
      </Wrapper>
      <Copyright>
        <p>Copyright 2016 - Lorem ipsum dolor sit</p>
      </Copyright>
    </Container>
  );
}
