import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  position: sticky;
  top: 56px;
  overflow-x: hidden;
  z-index: 1;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;

  span {
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    box-sizing: border-box;
    border-radius: 8px;
    height: 32px;
    padding: 0 12px;
    font-size: 14px;
    flex-shrink: 0;

    :hover {
      cursor: pointer;
      background-color: #e8e8e8;
      transition: 0.4s;
    }
  }
`;

export const CarouselContainer = styled.div`
  width: 120px;
  height: 100%;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;

  :first-child {
    margin-left: 15px;
    left: 0;
    background: linear-gradient(90deg, white 40%, transparent);
  }

  :last-child {
    right: 0;
    padding-right: 12px;
    justify-content: flex-end;
    background: linear-gradient(-90deg, white 50%, transparent)
  }
`;

export const ButtonIcon = styled.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  padding: 16px;

  :hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }
`;
