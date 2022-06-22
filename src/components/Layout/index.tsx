import React from "react";

import { Container } from './styles';

import Mainheader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'

const Layout: React.FC = () => {
    return (

        <Container>

            <Mainheader />
            <Aside />
            <Content />
                
            
        </Container>
    );
} 

export default Layout;