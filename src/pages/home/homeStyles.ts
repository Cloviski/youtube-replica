import styled from "styled-components";

export const VideoContainer = styled.div<{ openMenu: boolean }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 16px;
  row-gap: 40px;
  padding: 24px 24px 40px 24px;
  box-sizing: border-box;

  @media (max-width: 1650px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1366px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ShortsContainer = styled.div<{ openMenu: boolean }>`
  max-width: ${({ openMenu }) => (openMenu ? "85vw" : "95vw")};
  padding: 0 0 0 24px;
  margin-bottom: 40px;

  @media (max-width: 1366px) {
    max-width: ${({ openMenu }) => (openMenu ? "79.5vw" : "90vw")};
  }
`;

export const ShortsInnerContainer = styled.div<{ openMenu: boolean }>`
  display: grid;
  grid-template-columns: ${({ openMenu }) =>
    openMenu ? "repeat(6, 1fr)" : "repeat(7, 1fr)"};
  column-gap: 0.7vw;
  row-gap: 1.4vw;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ShortsIconContainer = styled.div`
  border-top: 4px solid rgba(0, 0, 0, 0.1);
  padding: 24px 0;
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
