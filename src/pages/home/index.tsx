import { useContext } from "react";

import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { AppContext } from "../../contexts/AppContext";

function Home() {
    const { openMenu } = useContext(AppContext);

    return (
        <Container openMenu={openMenu}>
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
            <VideoComponent />
        </Container>
    )
}

export default Home;