import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 56px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const YoutubeLogo = styled.img`
    cursor: pointer;
    width: 90px;
    padding: 6px;
`;

//style={{ cursor: 'pointer', width: '90px', padding: '6px' }}

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
        background-color: #f2f2f2
    }
`;

export const ButtonIcon = styled.img`
    width: 18px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 519px;
    height: 38px;
    margin-left: 67px;
    border: 1px solid #d3d3d3;
    border-right: 0;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 6px 0 14px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 24px;
    outline: none;
    border: none;
    font-size: 16px;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 38px;
    width: 50px;
    padding: 0 6px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
`;

export const SignMenuContainer = styled.div`
    width: 67px;
    height: 34px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 15px;

    & ${ButtonIcon} {
        width: 20px;
        margin-left: -4px;
        margin-right: 8px;
    }

    & span {
        white-space: nowrap;
        font-weight: 600;
        font-size: 13px;
        color: #065FD4;
    }
`;