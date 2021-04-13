import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Checkbox from '../Checkbox';
import FeedPopup from '../FeedPopup';

const Options = styled.div`
width: 340px;
margin-top: 10px;

label{
    margin: 10px;
}
`;

const Footer = styled.div`
    display:flex;
    justify-content: center;

    button {
        font: bold 14px Ubuntu;
        color: #FFFDE7;
    }
`;

const TxtArea = styled.textarea`
    width: 330px;
    height: 70px;
    border-radius: 10px;
    background-color: #FFFDE7;
    resize: none;

    &:focus{
        outline-width: 0;
    }
`

const Details = styled.div``;



export default function Report({close}) {

    return (
        <FeedPopup title="Denuncia" close={close}>
            <Options>
                <p>Motivo da Denuncia:</p>
                <Checkbox text="Linguagem ofensiva" />
                <Checkbox text="Comentário preconceituoso" />
                <Checkbox text="Críticas não relacionadas a disciplina" />
                <Checkbox text="Outros" />
            </Options>
            <Details>
                <p>Detalhe os motivos:</p>
                <TxtArea/>
            </Details>
            <Footer>
                <Button text="DENUNCIAR" backColor="#F44336" />
            </Footer>
        </FeedPopup>
    );
}
