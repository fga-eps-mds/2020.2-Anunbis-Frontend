import React from 'react';

import { Btn } from './styles';

export default function Button(props) {
  return (
    <Btn {...props}>
      {props.text}
    </Btn>
  );
}
