import styled from 'styled-components';

export const VideoContainer = styled.div<{ openMenu: boolean }>`
    max-width: 1680px;
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu?  'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    column-gap: 16px;
    row-gap: 58px;
    padding: ${({ openMenu }) => openMenu? '24px 106px' : '24px'};
`;

export const ShortsContainer = styled.div<{ openMenu: boolean }>`
    max-width: 1680px;
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu?  'repeat(8, 1fr)' : 'repeat(10, 1fr)'};
    column-gap: 16px;
    row-gap: 58px;
    padding: ${({ openMenu }) => openMenu? '24px 106px' : '24px'};
`;
