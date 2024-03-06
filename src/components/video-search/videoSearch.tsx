import {
  ChannelBanner,
  ChannelContainer,
  ChannelImage,
  ChannelName,
  Container,
  ContainerChannelBanner,
  ContainerChannelContent,
  Description,
  ImageBanner,
  TextCard,
  TextContainer,
  Title,
  TitleContainer,
} from "./videoSearchStyles";

interface Props {
  thumbnail: string;
  title: string;
  details: string;
  channelImage: string;
  channelName: string;
  description: string;
}

const VideoSearch: React.FC<Props> = (props) =>
  props.thumbnail.startsWith("https://yt3.ggpht.com/") ? (
    <ContainerChannelContent>
      <ContainerChannelBanner>
        <ChannelBanner style={{ backgroundImage: `url(${props.thumbnail})` }} />
      </ContainerChannelBanner>
      <TitleContainer>
        <TextContainer>
          <Title>{props.title}</Title>
          <ChannelContainer>
            <ChannelImage>{props.channelImage}</ChannelImage>
            <ChannelName>{props.channelName}</ChannelName>
          </ChannelContainer>
          <Description>{props.description}</Description>
        </TextContainer>
      </TitleContainer>
    </ContainerChannelContent>
  ) : (
    <Container>
      <ImageBanner style={{ backgroundImage: `url(${props.thumbnail})` }} />
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

export default VideoSearch;
