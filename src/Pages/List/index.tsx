import React, {useMemo, useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import gains from '../../repositories/gains';
import expenses from "../../repositories/expenses";
import formatCurrency from '../../Utils/formatCurrency';
import { Container, Content, Filters } from './styles'
import formatDate from '../../Utils/formatDate';

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;

}

const List: React.FC = () => {

    const [data, setData] = useState<IData[]>([]);

    const [monthSelected, setMonthSelected] = useState<string>(String (new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

    const {type} = useParams();
    
    const title = useMemo(() => {
            return type === 'entry-balance' ? 'Input Balances' : 'Output Balances'
    },[type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#f7931b' : '#e44c4e'
},[type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    },[type]);


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
        {value: '2021', label: '2021'},
        {value: '2022', label: '2022'}
    ];

    useEffect(() => {

        const filteredDate = listData.filter(item => {

            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;
        });

        const formattedData = filteredDate.map(item => {

            return {
                id: String(new Date().getTime()) + item.amount,
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recurrent' ? '#e44c4e' : '#4e41f0'
            }
        });

        setData(formattedData);
    },[listData, monthSelected, yearSelected, data.length]);

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
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
                {
                    data.map(item => (
                        <HistoryFinanceCard 
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                        ))
                }
            </Content>
        </Container>
    );
} 

export default List