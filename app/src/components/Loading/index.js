import React from 'react';
import {LoadingDiv, Ball} from './styles'


export default function Loading() {
    return (
        <LoadingDiv>
            <Ball delay="0" />
            <Ball delay="0.1s" />
            <Ball delay="0.2s" />
        </LoadingDiv>
    )
}
