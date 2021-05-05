import React from 'react';
import { Btn } from './styles';

export default function Button(props) {
  const { text } = props;
  return <Btn {...props}>{text}</Btn>;
}
