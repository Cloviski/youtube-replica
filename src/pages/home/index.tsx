import { useContext } from "react";

import VideoComponent from "../../components/videoComponent";
import { 
    VideoContainer,
    ShortsContainer,
    ShortsIconContainer,
    ShortsIcon,
    ShortsInnerContainer,
    DownArrowContainer,
    DownArrow
} from "./styles";
import { AppContext } from "../../contexts/AppContext";
import Category from "../../components/category";
import Shorts from "../../components/shorts";
import ShortsColored from "../../assets/youtube-shorts-colored.png"
import DownArrowShorts from "../../assets/down-arrow.png";
import Header from "../../components/header";
import { MainContainer, RoutesContainer } from "../../AppStyles";
import Menu from "../../components/menu";

const video = [
    { 
        image: 'https://images3.alphacoders.com/567/567308.jpg', 
        title: 'How I lost my sanity in Dubai...', 
        channel: 'Martin Walker', 
        views: '33M', 
        time: ' 2 weeks'
    }
]

function Home() {
    const { openMenu } = useContext(AppContext);

    return (
        <>
            <Header />
            <MainContainer>
                <Menu />
                <RoutesContainer>
                    <Category />
                    <VideoContainer openMenu={openMenu}>
                        <VideoComponent video={video} />
                        <VideoComponent video={video} />
                        <VideoComponent video={video} />
                        <VideoComponent video={video} />
                        <VideoComponent video={video} />
                        <VideoComponent video={video} />
                        <VideoComponent video={video} />
                        <VideoComponent video={video} />
                        <VideoComponent video={video} />
                        <VideoComponent video={video} />
                    </VideoContainer>
                    <ShortsContainer openMenu={openMenu}>
                        <ShortsIconContainer>
                            <ShortsIcon alt="" src={ShortsColored}/>
                            <span>Shorts</span>
                        </ShortsIconContainer>
                        <ShortsInnerContainer openMenu={openMenu}>
                            <Shorts />
                            <Shorts />
                            <Shorts />
                            <Shorts />
                            <Shorts />
                            <Shorts />
                            <Shorts />
                            <Shorts />
                            <Shorts />
                            <Shorts />
                        </ShortsInnerContainer>
                        <DownArrowContainer>
                            <DownArrow alt="" src={DownArrowShorts} />
                        </DownArrowContainer>
                    </ShortsContainer>
                </RoutesContainer>
            </MainContainer>
        </>
    )
}

export default Home;