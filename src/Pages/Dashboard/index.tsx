import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from './styles'

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Tiago', label: 'Tiago'}

    ];

    return (
        <Container>
            <ContentHeader title="dashboard" lineColor="#f7931b">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
} 

export default Dashboard