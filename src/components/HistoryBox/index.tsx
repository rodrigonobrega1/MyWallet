import React from "react";

import { Container, Header, LegendContainer, Legend } from './styles';

import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip} from "recharts";

import formatCurrency from '../../Utils/formatCurrency';

interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;

    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}


const HistoryBox: React.FC<IHistoryBoxProps> = ({
        data, lineColorAmountEntry, lineColorAmountOutput
}) => (

        <Container> 
            <Header> 
               <h2>History Balance</h2>
               <LegendContainer>
                        <Legend color={lineColorAmountEntry}>
                            <div></div>
                            <span>Input</span>
                        </Legend>
                        <Legend color={lineColorAmountOutput}>
                            <div></div>
                            <span>Output</span>
                        </Legend>
               </LegendContainer>
            </Header>
                    <ResponsiveContainer>
                        <LineChart data={data} >
                            <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                            <XAxis dataKey="month" stroke="#cecece"/>
                            <Tooltip formatter={(value: any) => formatCurrency(Number(value))}/>
                            <Line
                                type="monotone"
                                dataKey="amountEntry"
                                name="Input"
                                stroke= {lineColorAmountEntry}
                                strokeWidth={5}
                                dot={{r: 5}}
                                activeDot={{r: 8}}
                            />
                            <Line
                                type="monotone"
                                dataKey="amountOutput"
                                name="Output"
                                stroke= {lineColorAmountOutput}
                                strokeWidth={5}
                                dot={{r: 5}}
                                activeDot={{r: 8}}
                            />
                        </LineChart>
                </ResponsiveContainer>
        </Container>
    ) 

export default HistoryBox;