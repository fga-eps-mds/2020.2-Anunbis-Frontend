import React from 'react';
import { InputStyle } from './styles';

export default function Input(props) {
  const { text, onkeydown, register } = props;
  return (
    <InputStyle
      {...props}
      placeholder={text}
      ref={register}
      onKeyPress={onkeydown}
    />
  );
}
