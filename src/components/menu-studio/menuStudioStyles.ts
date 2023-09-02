import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
  min-width: ${({ openMenu }) => (openMenu ? "256px" : "76px")};
  height: calc(100vh - 56px);
  box-sizing: border-box;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 0 10px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  position: sticky;
  top: 56px;
`;

export const MenuItem = styled.div<{ openMenu: boolean; display?: string }>`
  width: 100%;
  min-height: ${({ openMenu }) => (openMenu ? "46px" : "30px")};
  cursor: pointer;
  padding: ${({ openMenu }) => (openMenu ? "0 32px" : "16px 0 14px 0")};
  box-sizing: border-box;
  display: ${({ openMenu, display }) =>
    openMenu ? "flex" : display || "none"};
  flex-direction: ${({ openMenu }) => (openMenu ? "row" : "column")};
  align-items: center;
  justify-content: ${({ openMenu }) => (openMenu ? "none" : "center")};

  span {
    display: ${({ openMenu }) => (openMenu ? "100%" : "none")};
    width: ${({ openMenu }) => (openMenu ? "100%" : "none")};
    font-weight: ${({ openMenu }) => (openMenu ? "400" : "500")};
    margin-left: ${({ openMenu }) => (openMenu ? "24px" : "none")};
    font-size: ${({ openMenu }) => (openMenu ? "14px" : "10px")};
  }

  :hover {
    background-color: #f2f2f2;
  }
`;

export const FixedItem = styled.div<{ openMenu: boolean; display?: string }>`
  width: 100%;
  min-height: ${({ openMenu }) => (openMenu ? "46px" : "30px")};
  cursor: pointer;
  padding: ${({ openMenu }) => (openMenu ? "0 32px" : "16px 0 14px 0")};
  box-sizing: border-box;
  display: ${({ openMenu, display }) =>
    openMenu ? "flex" : display || "none"};
  flex-direction: ${({ openMenu }) => (openMenu ? "row" : "column")};
  align-items: center;
  justify-content: ${({ openMenu }) => (openMenu ? "space-between" : "center")};

  span {
    display: ${({ openMenu }) => (openMenu ? "100%" : "none")};
    width: ${({ openMenu }) => (openMenu ? "100%" : "none")};
    font-weight: ${({ openMenu }) => (openMenu ? "400" : "500")};
    margin-left: ${({ openMenu }) => (openMenu ? "24px" : "none")};
    font-size: ${({ openMenu }) => (openMenu ? "14px" : "10px")};
  }

  :hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;

export const ChannelContainer = styled.div<{
  openMenu: boolean;
  display?: string;
}>`
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  align-items: center;

  & span {
    :nth-child(2) {
      display: ${({ openMenu, display }) =>
        openMenu ? "flex" : display || "none"};
      padding: 15px 0 5px;
      font-size: 13px;
      font-family: "YouTube Sans", sans-serif;
      font-weight: 600;
    }

    :nth-child(3) {
      display: ${({ openMenu, display }) =>
        openMenu ? "flex" : display || "none"};
      color: #666;
      font-size: 12px;
      font-family: "YouTube Sans", sans-serif;
      font-weight: 500;
    }
  }
`;

export const ButtonContainer = styled.div<{ openMenu: boolean }>`
  width: ${({ openMenu }) => (openMenu ? "112px" : "40px")};
  height: ${({ openMenu }) => (openMenu ? "112px" : "40px")};
  border-radius: 50%;
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
    font-size: ${({ openMenu }) => (openMenu ? "50px" : "20px")};
  }
`;
