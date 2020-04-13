import React, { useState, useEffect } from 'react';
import PieChart from 'react-minimal-pie-chart';
import Wrapper from '../Wrapper';

import { Container, Table, PieWrapper, Labels, Label, Icon } from './styles';

export default function Data() {
  const [users, setUsers] = useState([]);

  // Simulando chamada na API, pois a API do desafio não está funcionando mais.
  // Devido a ser um desafio antigo
  useEffect(() => {
    setUsers([
      { name: 'Carlos', lastName: 'Moura', percent: 5, color: '#15b999' },
      { name: 'Lucas', lastName: 'Luz', percent: 15, color: '#bcc3c7' },
      { name: 'Dalton', lastName: 'Neves', percent: 20, color: '#2c97de' },
      { name: 'Clau', lastName: 'Sena', percent: 20, color: '#9c55b8' },
      { name: 'Diego', lastName: 'Sampaio', percent: 40, color: '#e94a35' },
    ]);
  }, []);

  return (
    <Wrapper>
      <Container>
        <Table>
          <thead>
            <tr>
              <th />
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Participação</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{`${user.percent}%`}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <PieWrapper>
          <PieChart
            data={users.map((user) => ({
              title: user.name,
              value: user.percent,
              color: user.color,
            }))}
            lineWidth={40}
            paddingAngle={2}
            animate
            animationDuration={1000}
          />
          <Labels>
            {users.map((user) => (
              <Label color={user.color}>
                <Icon color={user.color} />
                <p>{`${user.name} ${user.lastName}`}</p>
              </Label>
            ))}
          </Labels>
        </PieWrapper>
      </Container>
    </Wrapper>
  );
}
