import {
  Container,
  ImageBanner,
  ChannelImage,
  Title,
  TextContainer,
  TitleContainer,
  TextCard,
  ChannelName,
} from "./videoHomeStyles";
import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";

interface Props {
  title: string;
  thumbnail: string;
  channelImage: string;
  channelName: string;
  details: string;
}

function VideoHome(props: Props) {
  const { openMenu } = useContext(MenuContext);

  return (
    <Container openMenu={openMenu}>
      <ImageBanner alt="" src={props.thumbnail} openMenu={openMenu} />
      <TitleContainer>
        <ChannelImage>{props.channelImage}</ChannelImage>
        <TextContainer>
          <Title>{props.title}</Title>
          <ChannelName>{props.channelName}</ChannelName>
          <TextCard>{props.details}</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default VideoHome;
