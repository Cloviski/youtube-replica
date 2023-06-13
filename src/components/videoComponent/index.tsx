import { useContext } from "react";
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
import { AppContext } from "../../contexts/AppContext";

function VideoComponent({ video }: any) {
    const { openMenu } = useContext(AppContext);

    return (
       <Container>
            <ImageBanner alt="" src="https://images3.alphacoders.com/567/567308.jpg" openMenu={openMenu}/>
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
    )
}

export default VideoComponent;