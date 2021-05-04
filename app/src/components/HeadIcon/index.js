import React from 'react';
import { Picture } from './styles';

export default function HeadIcon({ imgSrc, name, linkGithub }) {
  return (
    <Picture>
      <a href={linkGithub} target="_blank" rel="noreferrer">
        <div>
          {name}
        </div>
        <img src={imgSrc} alt={name} />

      </a>
    </Picture>
  );
}
