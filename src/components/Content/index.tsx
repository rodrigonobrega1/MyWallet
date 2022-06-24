import React, { ReactNode } from "react";

import { Container } from './styles';

interface BaseLayoutProps {
    children?: ReactNode;
}

const Content: React.FC<BaseLayoutProps> = ({children}) => {
    return (

        <Container>

            {children}
            
        </Container>
    );
} 

export default Content;