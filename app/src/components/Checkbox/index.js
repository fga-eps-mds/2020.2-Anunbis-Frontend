import React from 'react';
import { Checkmark, Container } from './styles';

export default function Checkbox({ text, name, register }) {
  return (
    <Container>
      <input type="checkbox" name={name} ref={register} />
      <Checkmark />
      {text}
    </Container>
  );
}
