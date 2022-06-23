import React from "react";
import logoimg from '../../assets/wallet.png'
import { Container, Header, LogImg, Title, MenuContainer, MenuItemLink } from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

const Aside: React.FC = () => {
    return (

        <Container>
            <Header>
                <LogImg src={logoimg} alt='Logo My Wallet' />
                <Title>My Wallet</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href='#'>
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdArrowUpward />
                    Input
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdArrowDownward />
                    Output
                </MenuItemLink>
                <MenuItemLink href='#'>
                    <MdExitToApp />
                    Exit
                </MenuItemLink>
            </MenuContainer>
            
        </Container>
    );
} 

export default Aside;