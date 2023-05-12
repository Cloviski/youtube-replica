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
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

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
    width: 16px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 519px;
    height: 38px;
    margin-left: 60px;
    border: 1px solid #d3d3d3;
    border-right: 0;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 4px 0 16px;
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