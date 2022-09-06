import styled from "styled-components";

interface ContainerProps{
    backgroundColor: string
}

export const Container = styled.button<ContainerProps>`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;

    background-color:  ${(props) => props.backgroundColor};
`;

export const Div = styled.div<ContainerProps>`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;

    background-color:  ${(props) => props.backgroundColor};
`;