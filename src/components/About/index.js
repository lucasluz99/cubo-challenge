import React from 'react';

import Graph from '../Graph';

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
          <Graph title="Percentual" percent="18" />
          <Graph title="Percentual" percent="75" />
          <Graph title="Percentual" percent="50" />
        </Graphs>
      </Content>
    </Container>
  );
}
