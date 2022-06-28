import React, { ReactNode } from "react";
import { MdOutlinePendingActions } from "react-icons/md";

import { Container } from './styles';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
}


const SelectInput: React.FC<ISelectInputProps> = ({options}) => {
    return (

        <Container>
            <select>
                {
                    options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))
                }
              
            </select>
        </Container>
    );
} 

export default SelectInput;