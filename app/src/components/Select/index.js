/* eslint-disable */
import React from 'react';
import { SelectStyle } from './styles';

export default function Select({
  text,
  id,
  name,
  register,
  options,
  backColor,
  width,
  error,
  onChange,
  display,
  testid,
}) {
  return (
    <SelectStyle
      id={id}
      name={name}
      ref={register}
      backColor={backColor}
      width={width}
      error={error}
      onChange={onChange}
      display={display}
      data-testid={testid}
    >
      <option value="" disabled selected>
        {text}
      </option>
      {options?.map((item) => (
        <option
          value={item.id}
          key={item.id}
          selected={item.selected ? item.selected : false}
        >
          {item.name}
        </option>
      ))}
    </SelectStyle>
  );
}
