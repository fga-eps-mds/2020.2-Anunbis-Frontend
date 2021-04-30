import React from 'react';
import { Picture } from './styles';


export default function HeadIcon({ imgSrc, name, linkGithub }) {

    return (
        <Picture>

            <a target="_blank" href={linkGithub} >
            <div>
                    {name}
            </div>
            <img src={imgSrc} alt={name} />

            </a>
        </Picture>
    );
}