import styled from 'styled-components';



export const Picture = styled.div`
    display: flex;
    position: relative;
    width: 150px;
    height: 150px;
    overflow: hidden;

    a {
        color: inherit;
        height: 100%;
        width: 100%;
        position: absolute;
        text-decoration: none;
    }

    :hover {
        img {
            border-radius: 50px;   
        }
        div {
            opacity: 1;
        }
    }

    img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        transition: all 0.5s ease;
        border: 1px solid;
    }

    div {
        font-size: 16px;
        font-weight: bold;
        text-shadow: 2px 2px 2px black;
        color: var(--white);
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease-in-out;
        opacity: 0;
    }
    
`