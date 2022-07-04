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
import listOfMonths from '../../Utils/months';
import { v4 as uuidv4 } from 'uuid';

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
    const [monthSelected, setMonthSelected] = useState<number>((new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<number>((new Date().getFullYear()));
    const [frequencyFilterSelected, setfrequencyFilterSelected] = useState(['recurrent', 'eventual']);
    const {movimentType} = useParams();

    const pageData = useMemo(() => {

        return movimentType === 'entry-balance' ?
            {
                title: 'Input-balance',
                lineColor: '#f7931b',
                data: gains
            }
            :
            {
                title: 'Output-balance',
                lineColor: '#e44c4e',
                data: expenses
            }
    },[movimentType]);


    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        })

    },[]);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];
        
        pageData.data.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        })

    },[pageData]);


    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);
        
        if(alreadySelected >= 0){
            const filtered = frequencyFilterSelected.filter(item => item !== frequency);
            setfrequencyFilterSelected(filtered);

        }else{
            setfrequencyFilterSelected((prev) => [...prev, frequency]);
        }
    }

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }catch(error){
            throw new Error('invalid month value. is accept 0 - 24.')
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }catch(error){
            throw new Error('invalid year value. is accept integer numbers.')
        }
    }

    useEffect(() => {

        const { data } = pageData;

        const filteredDate = data.filter(item => {

            const date = new Date(item.date);
            const month = (date.getMonth() + 1);
            const year = (date.getFullYear());

            return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);
        });

        const formattedData = filteredDate.map(item => {

            return {
                id: uuidv4(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recurrent' ? '#e44c4e' : '#4e41f0'
            }
        });

        setData(formattedData);
    },[pageData, monthSelected, yearSelected, data.length, frequencyFilterSelected]);

    return (
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
                <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected}/>
            </ContentHeader>

            <Filters>

                <button type="button" className={`tag-filter tag-filter-recurring ${frequencyFilterSelected.includes('recurrent') && 'tag-actived'}`} 
                        onClick={() => handleFrequencyClick('recurrent')}>

                    Recurrent

                </button>

                <button type="button" className={`tag-filter tag-filter-eventual ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
                        onClick={() => handleFrequencyClick('eventual')}>
                    
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