import React from 'react';
import { Checkmark, Container } from './styles';

export default function Checkbox({ text, name, register, checked, onChange }) {
  return (
    <Container>
      <input type="checkbox" name={name} ref={register} checked={checked} onChange={onChange}/>
      <Checkmark />
      {text}
    </Container>
  );
}