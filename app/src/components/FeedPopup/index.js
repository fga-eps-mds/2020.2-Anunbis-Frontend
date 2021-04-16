import styled from 'styled-components';
import Button from '../Button';

const Container = styled.div`
    width: 372px;
    min-height: 380px;
    height: fit-content;
    background-color: #FFFDE7;
    border-bottom-right-radius: 2%;
    border-bottom-left-radius: 2%;
    display: flex;
    flex-direction: column;

`;

const Header = styled.div`
    height: 20px;
    width: inherit;
    background-color: #212121;
    display: flex;
    justify-content: center;

    Button {
        margin-inline: 0px;
        color: #FFFDE7;
        border: 0px;
    }
`;

const Title = styled.div`
    width: 50px;
    display:flex;
    color: #FFFDE7;
    margin-left: auto;
    margin-right: auto;
`;

const Content = styled.main`
align-self: center;
justify-content: center;
`;

export default function FeedPopup({close, title, children}) {

    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                <Button onClick={close} text="X" radius="0px" padding="2px 5px" backColor="#F44336" />
            </Header>
            <Content>
                {children}
            </Content>

        </Container>
    );
}