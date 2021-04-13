import styled from 'styled-components';
import FeedPopup from '../FeedPopup';

const Options = styled.div`

  
`;

export default function Report(){
    
    return(
        <FeedPopup title="Denuncia">
            <Options>
                Motivo da Denuncia:
            </Options>
        </FeedPopup>
    );
}
