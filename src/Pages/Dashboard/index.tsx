import React, { useState, useMemo } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from './styles'
import listOfMonths from '../../Utils/months';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import WalletBox from '../../components/WalletBox';

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>((new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<number>((new Date().getFullYear()));

    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Tiago', label: 'Tiago'}

    ];


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
        
        [...expenses, ...gains].forEach(item => {
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

    },[]);


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


    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#f7931b">
                <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected}/>
            </ContentHeader>

            <Content>
                <WalletBox 
                    title="Balance"
                    color="#7b41f0"
                    amount={150.00}
                    footerlabel={"atualizado com base nas entrada e saidas"}
                    icon="dollar"
                />

                <WalletBox 
                    title="Input"
                    color="#f7931b"
                    amount={5000.00}
                    footerlabel={"atualizado com base nas entrada e saidas"}
                    icon="arrowUp"
                />

                <WalletBox 
                    title="Output"
                    color="#e44c4e"
                    amount={4850.00}
                    footerlabel={"atualizado com base nas entrada e saidas"}
                    icon="arrowDown"
                />
            </Content>
        </Container>
    );
} 

export default Dashboard