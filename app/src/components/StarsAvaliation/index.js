import React from 'react';

import { Container } from './styles';
import Checkbox from '../Checkbox';

function StarsAvaliation({ name, register }) {
  const [isChecked, setChecked] = React.useState(0);

  function setStatus(num, numStatus) {
    if (num === numStatus) {
      setChecked(0);
    } else {
      setChecked(num);
    }
  }

  return (
    <Container>
      <Checkbox
        name={name}
        register={register}
        checked={isChecked >= 1}
        onChange={() => setStatus(1, isChecked)}
      />
      <Checkbox
        name={name}
        register={register}
        checked={isChecked >= 2}
        onChange={() => setStatus(2, isChecked)}
      />
      <Checkbox
        name={name}
        register={register}
        checked={isChecked >= 3}
        onChange={() => setStatus(3, isChecked)}
      />
      <Checkbox
        name={name}
        register={register}
        checked={isChecked >= 4}
        onChange={() => setStatus(4, isChecked)}
      />
      <Checkbox
        name={name}
        register={register}
        checked={isChecked >= 5}
        onChange={() => setStatus(5, isChecked)}
      />
    </Container>
  );
}

export default StarsAvaliation;
