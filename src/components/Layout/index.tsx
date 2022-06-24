import React, { ReactNode } from "react";

import { Container } from './styles';

import Mainheader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'

interface BaseLayoutProps {
    children?: ReactNode;
  }

const Layout: React.FC<BaseLayoutProps> = ( {children} ) => {
    return (

        <Container>

            <Mainheader />
            <Aside />
            <Content>
                {children}
            </Content>
        </Container>
    );
} 

export default Layout;