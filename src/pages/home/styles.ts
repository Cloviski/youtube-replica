import styled from 'styled-components';

export const Container = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: 1680px;
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu?  'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    column-gap: 16px;
    row-gap: 78px;
`;
