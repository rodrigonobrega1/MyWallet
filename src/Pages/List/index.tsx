import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content } from './styles'

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
            <Content>
                <HistoryFinanceCard 
                    cardColor="#443162"
                    tagColor="#e44c4e"
                    title="Energy"
                    subtitle="28/06/2022"
                    amount="€ 125,00"
                />
                <HistoryFinanceCard 
                    cardColor="#443162"
                    tagColor="#e44c4e"
                    title="Energy"
                    subtitle="28/06/2022"
                    amount="€ 125,00"
                />
                <HistoryFinanceCard 
                    cardColor="#443162"
                    tagColor="#e44c4e"
                    title="Energy"
                    subtitle="28/06/2022"
                    amount="€ 125,00"
                />
                <HistoryFinanceCard 
                    cardColor="#443162"
                    tagColor="#e44c4e"
                    title="Energy"
                    subtitle="28/06/2022"
                    amount="€ 125,00"
                />
                <HistoryFinanceCard 
                    cardColor="#443162"
                    tagColor="#e44c4e"
                    title="Energy"
                    subtitle="28/06/2022"
                    amount="€ 125,00"
                />
                <HistoryFinanceCard 
                    cardColor="#443162"
                    tagColor="#e44c4e"
                    title="Energy"
                    subtitle="28/06/2022"
                    amount="€ 125,00"
                />
                <HistoryFinanceCard 
                    cardColor="#443162"
                    tagColor="#e44c4e"
                    title="Energy"
                    subtitle="28/06/2022"
                    amount="€ 125,00"
                />
                <HistoryFinanceCard 
                    cardColor="#443162"
                    tagColor="#e44c4e"
                    title="Energy"
                    subtitle="28/06/2022"
                    amount="€ 125,00"
                />
                <HistoryFinanceCard 
                    cardColor="#443162"
                    tagColor="#e44c4e"
                    title="Energy"
                    subtitle="28/06/2022"
                    amount="€ 125,00"
                />
            </Content>
        </Container>
    );
} 

export default List