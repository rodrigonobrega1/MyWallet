import styled from 'styled-components';

interface IContainerProps {

    color: string;
}

interface ITagProps {

    color: string;
}

export const Container = styled.li<IContainerProps>`
    background-color: ${props => props.color};
    list-style: none;
    border-radius: 5px;
    margin: 10px;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    position: relative;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }

    > div span {
        
    }

`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 60%;
    position: absolute;
    background-color: ${props => props.color};
    left: 0;
`;