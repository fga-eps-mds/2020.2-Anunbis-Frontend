import React from 'react';

import { Container } from './styles';
import Checkbox from '../Checkbox';

function StarsAvaliation({ name, register }) {
  const [isChecked, setChecked] = React.useState(0);

  function status(num, numStatus) {
    return num === numStatus ? 0 : num;
  }

  return (
    <Container>
      <Checkbox
        name={name}
        register={register}
        checked={isChecked >= 1}
        onChange={() => setChecked(status(1, isChecked))}
        testid="input-stars-1"
      />
      <Checkbox
        name={name}
        register={register}
        checked={isChecked >= 2}
        onChange={() => setChecked(status(2, isChecked))}
        testid="input-stars-2"
      />
      <Checkbox
        name={name}
        register={register}
        checked={isChecked >= 3}
        onChange={() => setChecked(status(3, isChecked))}
        testid="input-stars-3"
      />
      <Checkbox
        name={name}
        register={register}
        checked={isChecked >= 4}
        onChange={() => setChecked(status(4, isChecked))}
        testid="input-stars-4"
      />
      <Checkbox
        name={name}
        register={register}
        checked={isChecked >= 5}
        onChange={() => setChecked(status(5, isChecked))}
        testid="input-stars-5"
      />
    </Container>
  );
}

export default StarsAvaliation;
