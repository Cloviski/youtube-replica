import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
  width: ${({ openMenu }) => (openMenu ? "13.75rem" : "14.625rem")};
  cursor: pointer;

  @media (max-width: 1366px) {
    width: ${({ openMenu }) => (openMenu ? "13.75rem" : "14.625rem")};
  }
`;

export const ImageBanner = styled.img<{ openMenu: boolean }>`
  width: 100%;
  border-radius: 12px;
  min-height: 26rem;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  margin: 10px 0 6px 0;
  font-weight: 600;
  color: #0f0f0f;
`;

export const TextCard = styled.span`
  margin-bottom: 4px;
  color: #8c8c8c;
  font-size: 14px;
`;
