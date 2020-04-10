import React from 'react';

import CircularGraph from '../CircularGraph';
import { Container, Content, Text, Graphs } from './styles';

export default function About() {
  return (
    <Container>
      <img src="https://i.picsum.photos/id/133/900/500.jpg" alt="" />
      <Content>
        <Text>
          <h1>Sobre nós</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            temporibus, odio assumenda ducimus atque ipsum nostrum debitis ullam
            asperiores exercitationem veniam perferendis a optio dolor at
            praesentium sint hic ab. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusamus temporibus, odio assumenda ducimus atque
            ipsum nostrum debitis ullam asperiores exercitationem veniam
            perferendis a optio dolor at praesentium sint hic ab.
          </p>
        </Text>
        <Graphs>
          <CircularGraph width={4} percent={18} title="percentual" text="18%" />
          <CircularGraph width={4} percent={75} title="hora" text="12:00" />
          <CircularGraph width={4} percent={30} title="valor" text="R$350" />
        </Graphs>
      </Content>
    </Container>
  );
}
