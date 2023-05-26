import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    position: sticky;
    top: 56px;
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;

    span {
        display: flex;
        align-items: center;
        background-color: #f2f2f2;
        box-sizing: border-box;
        border-radius: 8px;
        height: 32px;
        padding: 0 12px;
        font-size: 14px;
        flex-shrink: 0;
    }
`;

