import styled from 'styled-components';
import Checkbox from '../Checkbox';
import FeedPopup from '../FeedPopup';

const Options = styled.div`
width: 340px;
margin-top: 10px;

label{
    margin: 10px;
}
`;



export default function Report(){
    
    return(
        <FeedPopup title="Denuncia">
            <Options>
                Motivo da Denuncia:<br/>
                <Checkbox text="Linguagem ofensiva"/>
                <Checkbox text="Comentário preconceituoso"/>
                <Checkbox text="Críticas não relacionadas a disciplina"/>
                <Checkbox text="Outros"/>
            </Options>
        </FeedPopup>
    );
}
