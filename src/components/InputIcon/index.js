import React from 'react';

import Icons from './icons';

import { Input } from './styles';

export default function InputIcon({ ...data }) {
  const Icon = Icons[data.icon] || Icons.dot;

  return (
    <Input>
      <input {...data} />
      <Icon size={25} color="#404040" />
    </Input>
  );
}
