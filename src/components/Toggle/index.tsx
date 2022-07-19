import React, {useState} from 'react';
import { Container, ToggleLabel, ToggleSelector } from './style';

interface IToggleProps {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}


const Toggle: React.FC<IToggleProps> = ({
    labelLeft, labelRight, checked, onChange
}) => {
    
    return(
    <Container>
        <ToggleLabel>{labelLeft}</ToggleLabel>
        <ToggleSelector 
            checked = {checked}
            onChange= {onChange}
                uncheckedIcon={false}
                checkedIcon={false}
        />
        <ToggleLabel>{labelRight}</ToggleLabel>
        
    </Container>
    );
}

export default Toggle