import {
  ChannelContainer,
  ChannelImage,
  ChannelName,
  Container,
  Description,
  ImageBanner,
  TextCard,
  TextContainer,
  Title,
  TitleContainer,
} from "./videoSearchStyles";

interface Props {
  title: string;
  thumbnail: string;
  channelImage: string;
  channelName: string;
  details: string;
  description: string;
}

function VideoSearch(props: Props) {
  return (
    <Container>
      <ImageBanner style={{backgroundImage: `url(${props.thumbnail})`}} />
      <TitleContainer>
        <TextContainer>
          <Title>{props.title}</Title>
          <TextCard>{props.details}o</TextCard>
          <ChannelContainer>
            <ChannelImage>{props.channelImage}</ChannelImage>
            <ChannelName>{props.channelName}</ChannelName>
          </ChannelContainer>
          <Description>{props.description}</Description>
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default VideoSearch;
