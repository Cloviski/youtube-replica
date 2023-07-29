import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ImageBanner = styled.div`
  max-width: 360px;
  min-width: 343px;
  width: 100%;
  border-radius: 12px;
  min-height: 12.625rem;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;

  :hover {
    border-radius: 0;
    transition: 0.5s;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: block;
  cursor: pointer;
  padding-left: 16px;
`;

export const ChannelImage = styled.div`
  background-color: #f2f2f2;
  min-width: 24px;
  min-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 10px;
`;

export const ChannelContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
`;

export const Title = styled.span`
  margin: 2px 0 3px 0;
  font-weight: 600;
  font-size: 18px;
  color: #0f0f0f;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextCard = styled.span`
  margin-bottom: 4px;
  color: #8c8c8c;
  font-size: 14px;
`;

export const ChannelName = styled.span`
  color: #8c8c8c;
  font-size: 12px;
  padding-left: 6px;

  :hover {
    color: #0f0f0f;
  }
`;

export const Description = styled.span`
  color: #7a7a7a;
  font-size: 12px;
  padding-top: 6px;
`;
