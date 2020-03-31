import React, { useState } from 'react';

import { MdMenu, MdClose } from 'react-icons/md';
import { Items, Container, Icon } from './styles';

export default function Burger() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <Icon
        type="button"
        onClick={() => setMenuOpen((prevState) => !prevState)}
      >
        {menuOpen ? <MdClose size={40} /> : <MdMenu size={40} />}
      </Icon>
      <Items menuOpen={menuOpen}>
        <li>
          <a href="/">Home</a>
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
      </Items>
    </Container>
  );
}
