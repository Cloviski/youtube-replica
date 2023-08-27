import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 64px;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
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

export const ButtonContainer = styled.div<{ margin?: string }>`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  margin: ${({ margin }) => (margin ? margin : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
  }
`;

export const AccountContainer = styled.div<{ margin?: string }>`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  margin: ${({ margin }) => (margin ? margin : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgb(200, 0, 0);

  :hover {
    background-color: rgb(165, 0, 0);
  }

  span {
    color: #fff;
  }
`;

export const AccountDropDown = styled.div<{ margin?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({ margin }) => (margin ? margin : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgb(200, 0, 0);

  :hover {
    background-color: rgb(165, 0, 0);
  }

  span {
    color: #fff;
  }
`;


export const ButtonIcon = styled.img`
  width: 18px;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const SearchInputContainer = styled.div`
  width: 48rem;
  height: 36px;
  border: 1px solid #d3d3d3;
  border-left: 0;
  border-radius: 0 5px 5px 0;
  display: flex;
  align-items: center;
  padding: 0 6px 0 14px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 24px;
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
`;

export const SearchButton = styled.div`
  border-radius: 5px 0 0 5px;
  height: 36px;
  width: 50px;
  padding: 0 6px;
  border: 1px solid #d3d3d3;
  border-right: 0;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderButton = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const CreateVideoContainer = styled.div`
  width: 67px;
  height: 34px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 20px;

  & ${ButtonIcon} {
    width: 20px;
    margin-left: -4px;
    margin-right: 8px;
  }

  & span {
    white-space: nowrap;
    font-weight: 600;
    font-size: 13px;
  }
`;

export const DropDownContainer = styled.div<{ dropDownMenu: boolean }>`
  display: ${({ dropDownMenu }) => (dropDownMenu ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px 5px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 300px;
  max-width: 300px;
  //max-height: 749px;
  overflow: hidden;
  top: 45px;
  right: 23px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    :first-child {
      padding-top: 2px;
      padding-bottom: 33px;
    }

    :last-child {
      font-size: 14px;
      color: #065fd4;
      cursor: pointer;
    }
  }
`;

export const InnerDropDownContainer = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  :last-child {
    border-bottom: none;
  }
`;

export const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 20px;
  padding: 10px 22px 10px 16px;
  cursor: pointer;

  span {
    font-size: 14px;
    display: block;
    width: 100%;
  }

  :hover {
    background-color: #f2f2f2;
  }
`;

export const DropDownIcon = styled.img`
  margin-right: 16px;
  width: 20px;
`;

export const ArrowIcon = styled.img`
  width: 12px;
`;
