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
  selected,
}) {
  return (
    <div className="Select">
      <SelectStyle
        id={id}
        name={name}
        ref={register}
        backColor={backColor}
        width={width}
        error={error}
        onChange={onChange}
        selected={selected}
      >
        <option value="" disabled selected>
          {text}
        </option>
        {options?.map((item) => (
          <option value={item.id} key={item.id} selected={item.selected ? item.selected : false}>
            {item.name}
          </option>
        ))}
      </SelectStyle>
    </div>
  );
}
