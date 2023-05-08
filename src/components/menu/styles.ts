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

export const TextInnerContainer = styled.div<{ openMenu: boolean }>`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 16px 32px;
    visibility: ${({ openMenu }) => openMenu? 'visible' : 'hidden'};
`;

export const TextMenuItem = styled.div<{ openMenu: boolean }>`
    font-size: 14px;
    font-weight: 400;

    span {
        line-height: 20px;
    }
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
        font-weight: ${({ openMenu }) => openMenu? '400'  : '500'};
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

export const SignMenuContainer = styled.div`
    width: 67px;
    height: 34px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    margin-top: 12px;
    display: flex;
    align-items: center;
    padding: 0 15px;

    & ${ButtonIcon} {
        width: 20px;
        margin-left: -6px;
        margin-right: 6px;
    }

    & span {
        font-weight: 600;
    }
`;