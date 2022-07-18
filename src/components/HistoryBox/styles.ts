import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 100%;
    height: 340px;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 20px 20px 50px 20px;

    border-radius: 7px;

    
    `;

export const Header = styled.header`

    width: 100%;
    display: flex;
    justify-content: space-between;


>h2 {
    padding-left: 3px;
    margin-bottom: 10px;
}

`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
`;

export const Legend = styled.li<ILegendProps>`

    display: flex;
    align-items: center;
    margin-bottom: 7px;
    margin-left: 10px;
    padding-right: 8px;

    >div {
        background-color: ${props => props.color};
        width: 25px;
        height: 25px;
        border-radius: 25px;
        font-size: 14px;
        line-height: 25px;
        text-align: center;
    }

    > span {
        margin-left: 5px;
    }
`;