import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import {
    Container,
    ImageBanner,
    ChannelImage,
    Title,
    TextContainer,
    TitleContainer,
    TextCard,
    ChannelName
} from "./styles";

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    channelName: string
    details: string
}

function VideoComponent( props : Props ) {
    const { openMenu } = useContext(MenuContext);

    return (
       <Container>
            <ImageBanner alt="" src={props.thumbnail} openMenu={openMenu}/>
            <TitleContainer>
                <ChannelImage>
                    {props.channelImage}
                </ChannelImage>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <ChannelName>{props.channelName}</ChannelName>
                    <TextCard>{props.details}</TextCard>
                </TextContainer>
            </TitleContainer>
       </Container>
    )
}

export default VideoComponent;

/*
<Container>
            <ImageBanner alt="thumbnail" src="https://images3.alphacoders.com/567/567308.jpg" openMenu={openMenu}/>
            <TitleContainer>
                <ChannelImage>
                    MW
                </ChannelImage>
                <TextContainer>
                    <Title>How I lost my sanity in Dubai...</Title>
                    <ChannelName>Martin Walker</ChannelName>
                    <TextCard>33M views • 2 weeks ago</TextCard>
                </TextContainer>
            </TitleContainer>
       </Container>
*/