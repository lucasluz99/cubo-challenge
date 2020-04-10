import React from 'react';

import { Box, Percent } from './styles';

export default function Graph({ title, percent }) {
  return (
    <Box>
      <Percent percent={percent}>
        <svg>
          <circle cx="70" cy="70" r="70" />
          <circle cx="70" cy="70" r="70" />
        </svg>
        <div>
          <h1>{percent}%</h1>
        </div>
        <h2>{title}</h2>
      </Percent>
    </Box>
  );
}
