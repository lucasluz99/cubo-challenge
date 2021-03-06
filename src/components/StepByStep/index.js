import React from 'react';

import { GiWorld } from 'react-icons/gi';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineLike } from 'react-icons/ai';
import { MdLocalShipping } from 'react-icons/md';
import { IoIosArrowDroprightCircle as Arrow } from 'react-icons/io';
import Wrapper from '../Wrapper';

import { Container, Steps, Card } from './styles';

export default function StepByStep() {
  return (
    <Wrapper>
      <Container>
        <h1>Como funciona?</h1>
        <Steps>
          <Card>
            <GiWorld size={100} color="#b5e83f" />
            <h1>Passo 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              labore ea placeat, architecto
            </p>
          </Card>
          <Arrow className="arrow" size={40} color="#b5e83f" />
          <Card>
            <FiShoppingCart size={100} color="#b5e83f" />
            <h1>Passo 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              labore ea placeat, architecto
            </p>
          </Card>
          <Arrow className="arrow" size={40} color="#b5e83f" />
          <Card>
            <AiOutlineLike size={100} color="#b5e83f" />
            <h1>Passo 3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              labore ea placeat, architecto
            </p>
          </Card>
          <Arrow className="arrow" size={40} color="#b5e83f" />
          <Card>
            <MdLocalShipping size={100} color="#b5e83f" />
            <h1>Passo 4</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              labore ea placeat, architecto
            </p>
          </Card>
        </Steps>
        <a href="/" title="Ler mais">
          Ler mais
        </a>
      </Container>
    </Wrapper>
  );
}
