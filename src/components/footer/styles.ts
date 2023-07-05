import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    width: 450px;
    height: 48px;
    padding: 8px 0 0;
    font-size: 12px;
    justify-content: space-between;
    line-height: 1.3333333;

`;

export const LanguageContainer = styled.div`
    display: flex;
    align-items: center;

    span {
        color: #555555;
        padding-right: 48px;
    }
`;

export const ButtonIcon = styled.img`
    width: 8px;
`;

export const TermsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    span {
        padding: 16px;
    }

    span:nth-child(3) {
        padding: 16px 0 16px 16px;
    }
`;