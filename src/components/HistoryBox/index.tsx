import React from "react";

import { Container } from './styles';

import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip} from "recharts";

interface IHistoryBoxProps {
    data: {
        month: string;
        amountInput: number;
        amountOutput: number;

    }[],
    lineColorAmountInput: string;
    lineColorAmountOutput: string;
}


const HistoryBox: React.FC<IHistoryBoxProps> = ({
        data, lineColorAmountInput, lineColorAmountOutput
}) => (

        <Container>
            
            <h2>History Balance</h2>

            <ResponsiveContainer>

                <LineChart data={[data]} >
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                    <XAxis dataKey="month" stroke="#cecece"/>
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="amountInput"
                        name="Input"
                        stroke= {lineColorAmountInput}
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