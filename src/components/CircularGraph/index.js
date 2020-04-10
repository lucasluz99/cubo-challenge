import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import { Container } from './styles';

export default function CircularGraph({ width, percent, title, text }) {
  return (
    <Container id="circular">
      <CircularProgressbar strokeWidth={width} value={percent} text={text} />
      <h1>{title}</h1>
    </Container>
  );
}
