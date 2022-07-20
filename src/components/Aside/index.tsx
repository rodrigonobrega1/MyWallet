import React from "react";
import logoimg from '../../assets/wallet.png'
import { Container, Header, LogImg, Title, MenuContainer, MenuItemLink, MenuItemButton } from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

import { useAuth } from "../../hooks/auth";

const Aside: React.FC = () => {

const { signOut } = useAuth();

    return (

        <Container>
            <Header>
                <LogImg src={logoimg} alt='Logo My Wallet' />
                <Title>My Wallet</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href='/'>
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href='/list/entry-balance'>
                    <MdArrowUpward />
                    Input
                </MenuItemLink>
                <MenuItemLink href='/list/exit-balance'>
                    <MdArrowDownward />
                    Output
                </MenuItemLink>
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Exit
                </MenuItemButton>
            </MenuContainer>
            
        </Container>
    );
} 

export default Aside;