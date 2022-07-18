import React, { useState, useMemo } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container, Content } from './styles'
import listOfMonths from '../../Utils/months';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import WalletBox from '../../components/WalletBox';
import MessageBox from "../../components/MessageBox";
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import PieChart from "../../components/PieChartBox";
import HistoryBox from "../../components/HistoryBox";
import BarChartBox from "../../components/BarChartBox";

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>((new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<number>((new Date().getFullYear()));


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


    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount! Amount must be number')
                }
            }
        });
            return total
    },[monthSelected, yearSelected]);



    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount! Amount must be number')
                }
            }
        });
            return total
    },[monthSelected, yearSelected]);


    const totalBalance = useMemo(() => {

            return totalGains - totalExpenses
    },[totalGains, totalExpenses]);


    const message = useMemo(() => {
            if(totalBalance < 0){
                return {
                    title: "Very bad!",
                    description: "You spent more than you should.",
                    footerText: "Check your spending to improve next month.",
                    icon: sadImg
                }
            }
           
            else if (totalGains === 0 && totalExpenses === 0){
                return {
                    title: "Opss!",
                    description: "This month dont have datas",
                    footerText: "I Can't see the future! comeback next month.",
                    icon: sadImg
                }
            }
           
            else if(totalBalance === 0){
                return {
                    title: "Almost!",
                    description: "Be careful. you need extra money... try to save.",
                    footerText: "Check your spending to improve next month.",
                    icon: sadImg
                }
            }
            
            else {
                return {
                    title: "Very good!",
                    description: "You are Positive",
                    footerText: "keep it up.",
                    icon: happyImg
            }
        }
    
    },[totalBalance, totalExpenses,totalGains ]);

    const relationExpensesVersusGains = useMemo (() => {
        
        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains / total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));
        const data = [
            {
                name: "Input",
                value: totalGains,
                percent: percentGains ? percentGains : 0,
                color: '#f7931b'
            },
            {
                name: "Output",
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0,
                color: '#e44c4e'
            },
        ];

        return data
        
    },[totalGains, totalExpenses]);

    const historyData = useMemo (() => {
        return listOfMonths.map((_, month) => {

            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth === month && gainYear === yearSelected){
                    try{
                        amountEntry += Number(gain.amount);
                    }catch{
                        throw new Error('amountEntry is invalid. Must be valid number.')
                    }
                }
            });

    let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth === month && expenseYear === yearSelected){
                    try{
                        amountOutput += Number(expense.amount);
                    }catch{
                        throw new Error('amountOutput is invalid. Must be valid number.')
                    }
                }
        });

        return {
            monthNumber: month,
            month: listOfMonths[month],
            amountEntry,
            amountOutput
        }

        }).filter(item => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();
            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear) || (yearSelected < currentYear)
        
        });
},[yearSelected]);


    const relationExpensesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0

        expenses
        .filter((expense) => {
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach((expense) => {
            if(expense.frequency === 'recurrent'){
                return amountRecurrent += Number(expense.amount);
            }
            if(expense.frequency === 'eventual'){
                return amountEventual += Number(expense.amount);
            }
        });

            const total = amountRecurrent + amountEventual;

            const eventualPercent = Number(((amountEventual / total)* 100).toFixed(1));
            const recurrentPercent =Number(((amountRecurrent / total)* 100).toFixed(1));

            return [{
                        name: 'Recurrent',
                        amount: amountRecurrent,
                        percent: recurrentPercent ? recurrentPercent : 0,
                        color: "#f7931b"
                    },
                    {
                        name: 'Eventual',
                        amount: amountEventual,
                        percent: eventualPercent ? eventualPercent : 0,
                        color: "#e44c4e"
                    }
                
                    ]

    },[monthSelected, yearSelected]);


    const relationGainsRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0

        gains
        .filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach((gain) => {
            if(gain.frequency === 'recurrent'){
                return amountRecurrent += Number(gain.amount);
            }
            if(gain.frequency === 'eventual'){
                return amountEventual += Number(gain.amount);
            }
        });

            const total = amountRecurrent + amountEventual;

            const eventualPercent = Number(((amountEventual / total)* 100).toFixed(1));
            const recurrentPercent =Number(((amountRecurrent / total)* 100).toFixed(1));
            
            return [{
                        name: 'Recurrent',
                        amount: amountRecurrent,
                        percent: recurrentPercent ? recurrentPercent : 0,
                        color: "#f7931b"
                    },
                    {
                        name: 'Eventual',
                        amount: amountEventual,
                        percent: eventualPercent ? eventualPercent : 0,
                        color: "#e44c4e"
                    }
                
                    ]

    },[monthSelected, yearSelected]);


    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }catch{
            throw new Error('invalid month value. is accept 0 - 24.')
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }catch{
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
                    amount={totalBalance}
                    footerlabel={"Updated based on inputs and outputs."}
                    icon="dollar"
                />

                <WalletBox 
                    title="Input"
                    color="#f7931b"
                    amount={totalGains}
                    footerlabel={"Updated based on inputs and outputs."}
                    icon="arrowUp"
                />

                <WalletBox 
                    title="Output"
                    color="#e44c4e"
                    amount={totalExpenses}
                    footerlabel={"Updated based on inputs and outputs."}
                    icon="arrowDown"
                />

                <MessageBox 
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChart data={relationExpensesVersusGains}/>
                 

                <HistoryBox 
                    data={historyData}
                    lineColorAmountEntry="#f7931b"
                    lineColorAmountOutput="#e44c4e"
                />

                <BarChartBox data={relationExpensesRecurrentVersusEventual}
                            title="Output"
                />

                <BarChartBox data={relationGainsRecurrentVersusEventual}
                            title="Input"
                />

            </Content>
        </Container>
    );
} 

export default Dashboard