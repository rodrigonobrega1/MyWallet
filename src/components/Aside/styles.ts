import styled from 'styled-components';

export const Container = styled.div`

    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogImg = styled.img`

`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 10px 0;
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: .70;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.info};
    border: none;
    background: none;
    margin: 10px 0;
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: .70;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;
