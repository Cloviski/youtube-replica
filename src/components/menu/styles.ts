import styled from 'styled-components';

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '276px' : '76px'};
    height: 100vh;
    box-sizing: border-box;
    padding: 56px 0 10px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto; //if items overlap, it will create an scroll automatically
`;

export const InnerContainer = styled.div<{ openMenu: boolean }>`
    padding: ${({ openMenu }) => openMenu? '12px' : '0 4px'};
    width: ${({ openMenu }) => openMenu? '90%' : 'none'};
    border-bottom: ${({ openMenu }) => openMenu? '1px solid rgba(0, 0, 0, 0.1)' : 'none'};
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '204px' : '64px'};
    min-height: ${({ openMenu }) => openMenu? '40px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: ${({ openMenu }) => openMenu? '0 12px' : '16px 0 14px 0'};
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};

    span {
        font-weight: ${({ openMenu }) => openMenu? '600'  : '600'};
        margin-left: ${({ openMenu }) => openMenu? '24px' : 'none'};
        margin-top: ${({ openMenu }) => openMenu? 'none' : '6px'};
        font-size: ${({ openMenu }) => openMenu? '14px' : '10px'}
    }

// first one is open and second is closed
    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 22px;
`;