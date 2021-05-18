import React from 'react';
import { Checkmark, Container } from './styles';

export default function Checkbox({
  text,
  name,
  register,
  checked,
  onChange,
  testid,
}) {
  return (
    <Container>
      <input
        type="checkbox"
        name={name}
        ref={register}
        checked={checked}
        onChange={onChange}
        data-testid={testid}
      />
      <Checkmark />
      {text}
    </Container>
  );
}
