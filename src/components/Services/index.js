import React from 'react';

import {
  MdRoom,
  MdSupervisorAccount,
  MdWork,
  MdTrendingUp,
} from 'react-icons/md';

import Wrapper from '../Wrapper';

import { Container, Titles, ServicesList, Service, Content } from './styles';

export default function Services() {
  return (
    <Wrapper>
      <Container>
        <Titles>
          <h1>Serviços</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </Titles>

        <ServicesList>
          <Service>
            <MdRoom size={40} color="blue" />
            <Content>
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                dolores labore harum error repellendus! Modi necessitatibus
                voluptas assumenda nemo illum similique aspernatur non, tenetur
                sit fugit odit eum iure nihil.
              </p>
            </Content>
          </Service>

          <Service>
            <MdSupervisorAccount size={40} color="blue" />
            <Content>
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                dolores labore harum error repellendus! Modi necessitatibus
                voluptas assumenda nemo illum similique aspernatur non, tenetur
                sit fugit odit eum iure nihil.
              </p>
            </Content>
          </Service>

          <Service>
            <MdTrendingUp size={40} color="blue" />
            <Content>
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                dolores labore harum error repellendus! Modi necessitatibus
                voluptas assumenda nemo illum similique aspernatur non, tenetur
                sit fugit odit eum iure nihil.
              </p>
            </Content>
          </Service>

          <Service>
            <MdWork size={40} color="blue" />
            <Content>
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                dolores labore harum error repellendus! Modi necessitatibus
                voluptas assumenda nemo illum similique aspernatur non, tenetur
                sit fugit odit eum iure nihil.
              </p>
            </Content>
          </Service>
        </ServicesList>
      </Container>
    </Wrapper>
  );
}
