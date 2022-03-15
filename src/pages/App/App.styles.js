import styled from 'styled-components/macro';

export const Planner = styled.div`
    display: grid;
    width: 960px;
    height: 600px;
    grid-template-columns: 1fr 1fr 1fr;
`;
export const Column = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: gray;
    border: 1px solid black;
`;

export const StatRow = styled.div`
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
`;

export const StatInput = styled.input`
    width: 30px;
`;
