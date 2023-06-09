import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const ImageBanner = styled.img<{ openMenu: boolean }>`
    max-width: 360px;
    min-width: 343px;
    width: 100%;
    border-radius: 12px;
    min-height: ${({ openMenu }) => openMenu? '12.625rem' : 'none'};
    cursor: pointer;

    :hover {
        border-radius: 0;
        transition: .5s;
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    cursor: pointer;
`;

export const ChannelImage = styled.div`
    background-color: #f2f2f2;
    min-width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-top: 12px;
    margin-right: 14px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 24px;
`;

export const Title = styled.span`
    margin: 10px 0 6px 0;
    font-weight: 600;
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
    margin-bottom: 4px;
    color: #8c8c8c;
    font-size: 14px;

    :hover {
        color: #0f0f0f;
    }
`;
