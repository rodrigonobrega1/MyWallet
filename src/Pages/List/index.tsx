import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content, Filters } from './styles'

const List: React.FC = () => {

    const months  = [
        {value: '1', label: 'Jan'},
        {value: '2', label: 'Feb'},
        {value: '3', label: 'Mar'},
        {value: '4', label: 'Apr'},
        {value: '5', label: 'May'},
        {value: '6', label: 'Jun'},
        {value: '7', label: 'Jul'},
        {value: '8', label: 'Ago'},
        {value: '9', label: 'Set'},
        {value: '10', label: 'Oct'},
        {value: '11', label: 'Nov'},
        {value: '12', label: 'Dec'}
    ];

    const years  = [
        {value: '2020', label: '2020'},
        {value: '2021', label: '2021'},
        {value: '2022', label: '2022'}
    ];

    return (
        <Container>
            <ContentHeader title="List" lineColor="#f7931b">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>

                <button type="button" className="tag-filter tag-filter-recurring">

                    Recurring

                </button>
                <button type="button" className="tag-filter tag-filter-eventual">

                    Eventual

                </button>

            </Filters>

            <Content>
                <HistoryFinanceCard 
                    tagColor="#e44c4e"
                    title="Energy"
                    subtitle="28/06/2022"
                    amount="€ 125,00"
                />
                <HistoryFinanceCard 
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