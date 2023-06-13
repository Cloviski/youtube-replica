import styled from 'styled-components';

export const VideoContainer = styled.div<{ openMenu: boolean }>`
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu?  'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    column-gap: 16px;
    row-gap: 60px;
    padding: ${({ openMenu }) => openMenu? '24px 106px 40px 106px' : '24px 24px 40px 24px'};
`;

export const ShortsContainer = styled.div<{ openMenu: boolean }>`
    max-width: 1792px;
    padding: ${({ openMenu }) => openMenu? '0 106px' : '0 24px'};
    margin-bottom: 40px;
`;

export const ShortsInnerContainer = styled.div<{ openMenu: boolean }>`
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu?  'repeat(8, 1fr)' : 'repeat(10, 1fr)'};
    column-gap: 16px;
    row-gap: 16px;
`;

export const ShortsIconContainer = styled.div`
    border-top: 4px solid rgba(0, 0, 0, 0.1);
    padding: 24px 0 24px 8px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;

    span {
        font-size: 20px;
    }
`;

export const ShortsIcon = styled.img`
    width: 16px;
    height: 20px;
    margin-right: 10px;
`;

export const DownArrowContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid rgba(0, 0, 0, 0.1);
    padding: 2px 0;

    :hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
        border-top: 1px solid #f2f2f2;
    }
`;

export const DownArrow = styled.img`
    width: 16px;
    height: 16px;
`;


