import { useContext } from "react";

import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";
import { AppContext } from "../../contexts/AppContext";
import Category from "../../components/category";


function Home() {
    const { openMenu } = useContext(AppContext);

    return (
        <>
        <Category />
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
        </>
    )
}

export default Home;