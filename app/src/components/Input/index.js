import React from 'react';
import { InputStyle } from './styles';

export default function Input(props) {
  return (
    <InputStyle
      {...props}
      type={props.type}
      placeholder={props.text}
      value={props.value}
      name={props.name}
      ref={props.register}
      autoComplete="off"
      onKeyPress={props.onkeydown}
      step={props.step}
      width={props.width}
    />
  );
}
