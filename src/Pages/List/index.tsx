import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from './styles'

const List: React.FC = () => {

    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Tiago', label: 'Tiago'}

    ];

    return (
        <Container>
            <ContentHeader title="List" lineColor="#f7931b">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
} 

export default List