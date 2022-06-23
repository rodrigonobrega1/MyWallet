import React from 'react';
import { Container, ToggleLabel, ToggleSelector } from './style';

const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector 
            checked
                uncheckedIcon={false}
                checkedIcon={false}
            onChange= {() => console.log('change')}
        />
        <ToggleLabel>Dark</ToggleLabel>
        
    </Container>
)

export default Toggle