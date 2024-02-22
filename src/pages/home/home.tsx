import { VideoContainer } from "./homeStyles";
import { useContext, useEffect, useState } from "react";
import { MainContainer, RoutesContainer } from "../../AppStyles";
import { useCategoryContext } from "../../contexts/categoryContext";
import { MenuContext } from "../../contexts/menuContext";
import { formatViewCount, getPublishedTime } from "./homeScripts";
import { useWindowResize } from "../../contexts/resizeContext";
import Category from "../../components/category/category";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import VideoHome from "../../components/video-home/videoHome";
import axios from "axios";

interface VideosProps {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
      maxres: {
        url: string;
      };
    };
    channelId: string;
    channelTitle: string;
    publishedAt: string;
  };
  statistics: {
    viewCount: string;
  };
}

function Home() {
  const [videos, setVideos] = useState<VideosProps[]>([]);
  const { categoryId } = useCategoryContext();
  const { openMenu } = useContext(MenuContext);

  useWindowResize();
  /*
  async function load() {
    try {
      const response = await axios.get(url);
      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=en_US&maxResults=30&regionCode=us&videoCategoryId=${categoryId}&key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    load();
  }, [categoryId]);
*/
  return (
    <>
      <Header />
      <MainContainer>
        <Menu />
        <RoutesContainer>
          <Category />
          <VideoContainer openMenu={openMenu}>
            {videos.map((video) => (
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
              >
                <VideoHome
                  title={video.snippet.title}
                  thumbnail={
                    video.snippet.thumbnails.maxres?.url ||
                    video.snippet.thumbnails.high?.url
                  }
                  channelImage={video.snippet.channelTitle
                    .charAt(0)
                    .toUpperCase()}
                  channelName={video.snippet.channelTitle}
                  details={`${formatViewCount(
                    Number(video.statistics.viewCount)
                  )} • ${getPublishedTime(video.snippet.publishedAt)}`}
                  key={video.id}
                />
              </a>
            ))}
          </VideoContainer>
        </RoutesContainer>
      </MainContainer>
    </>
  );
}

export default Home;
