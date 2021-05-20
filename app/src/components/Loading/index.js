import React from 'react';
import { LoadingDiv, Ball, LoadingBox } from './styles';

export default function Loading() {
  return (
    <LoadingBox data-testid="load-1">
      <LoadingDiv>
        <Ball delay="0" />
        <Ball delay="0.1s" />
        <Ball delay="0.2s" />
      </LoadingDiv>
    </LoadingBox>
  );
}
