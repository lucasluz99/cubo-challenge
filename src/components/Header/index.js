import React from 'react';

import Wrapper from '../Wrapper';
import LogoCubo from '../../assets/images/cubo.svg';
import Burger from '../Burger';

import { Container, Menu, Logo } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo src={LogoCubo} alt="Logo Cubo" />
        <Burger />
        <Menu>
          <ul>
            <li>
              <a className="first" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/">Menu 1</a>
            </li>
            <li>
              <a href="/">Menu 2</a>
            </li>
            <li>
              <a href="/">Menu 3</a>
            </li>
          </ul>
        </Menu>
      </Container>
    </Wrapper>
  );
}
