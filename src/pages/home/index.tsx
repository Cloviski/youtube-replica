import { useContext } from "react";

import VideoComponent from "../../components/videoComponent";
import { 
    VideoContainer,
    ShortsContainer
} from "./styles";
import { AppContext } from "../../contexts/AppContext";
import Category from "../../components/category";


function Home() {
    const { openMenu } = useContext(AppContext);

    return (
        <>
            <Category />
            <VideoContainer openMenu={openMenu}>
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
            </VideoContainer>
            <ShortsContainer openMenu={openMenu}>

            </ShortsContainer>
        </>
    )
}

export default Home;