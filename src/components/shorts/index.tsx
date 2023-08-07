import {
  Container,
  ImageBanner,
  Title,
  TextContainer,
  TitleContainer,
  TextCard,
} from "./styles";
import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";

function Shorts() {
  const { openMenu } = useContext(MenuContext);

  return (
    <Container openMenu={openMenu}>
      <ImageBanner
        src="https://images5.alphacoders.com/408/408722.jpg"
        openMenu={openMenu}
      />
      <TitleContainer>
        <TextContainer>
          <Title>How I lost my sanity in Dubai...</Title>
          <TextCard>33M views</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default Shorts;
