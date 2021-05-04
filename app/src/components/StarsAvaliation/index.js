import React from 'react';

import { Container } from './styles';
import Checkbox from '../Checkbox/'

function StarsAvaliation({ name, register }) {
    const [isChecked1, setChecked1] = React.useState(false);
    const [isChecked2, setChecked2] = React.useState(false);
    const [isChecked3, setChecked3] = React.useState(false);
    const [isChecked4, setChecked4] = React.useState(false);
    const [isChecked5, setChecked5] = React.useState(false);

    function setChecked(num, isChecked) {
        switch(num) {
            case 1:
                setChecked1(isChecked)
                break;
            case 2:
                setChecked2(isChecked)
                break;
            case 3:
                setChecked3(isChecked)
                break;
            case 4:
                setChecked4(isChecked)
                break;
            case 5:
                setChecked5(isChecked)
                break;

            default:
        }
    }
    function setStatus(num, status) {
        if(status === false){
            for(var a = num+1; a <= 5; a++) setChecked(a, status);
        }else{
            for(var b = 1; b <= num; b++) setChecked(b, status);
        }
    }

  return (
    <Container>
        <Checkbox name={name} register={register} checked={isChecked1} onChange={() => setStatus(1 ,!isChecked1)}/>
        <Checkbox name={name} register={register} checked={isChecked2} onChange={() => setStatus(2 ,!isChecked2)}/>
        <Checkbox name={name} register={register} checked={isChecked3} onChange={() => setStatus(3 ,!isChecked3)}/>
        <Checkbox name={name} register={register} checked={isChecked4} onChange={() => setStatus(4 ,!isChecked4)}/>
        <Checkbox name={name} register={register} checked={isChecked5} onChange={() => setStatus(5 ,!isChecked5)}/>
    </Container>
  );
}

export default StarsAvaliation;