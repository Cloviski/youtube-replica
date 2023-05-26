import { useContext } from "react";
import {
    Container,
    ImageBanner,
    ChannelImage,
    Title,
    TextContainer,
    TitleContainer,
    TextCard
} from "./styles";
import { AppContext } from "../../contexts/AppContext";

function VideoComponent() {
    const { openMenu } = useContext(AppContext);

    return (
       <Container>
            <ImageBanner src="https://images3.alphacoders.com/567/567308.jpg" openMenu={openMenu}/>
            <TitleContainer>
                <ChannelImage>
                    MW
                </ChannelImage>
                <TextContainer>
                    <Title>How I lost my sanity in Dubai...</Title>
                    <TextCard>Martin Walker</TextCard>
                    <TextCard>33M views • 2 weeks ago</TextCard>
                </TextContainer>
            </TitleContainer>
       </Container>
    )
}

export default VideoComponent;