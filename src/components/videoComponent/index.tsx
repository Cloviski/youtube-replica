import { Container, ImageBanner, ChannelImage, Title, TextContainer, TitleContainer, TextCard } from "./styles";

function VideoComponent() {

    return (
       <Container>
            <ImageBanner src="https://images3.alphacoders.com/567/567308.jpg" />
            <TitleContainer>
                <ChannelImage>
                    MW
                </ChannelImage>
                <TextContainer>
                    <Title>How I lost my sanity in Dubai...</Title>
                    <TextCard>Martin Walker</TextCard>
                    <TextCard>33 mi views • 2 weeks ago</TextCard>
                </TextContainer>
            </TitleContainer>
       </Container>
    )
}

export default VideoComponent;