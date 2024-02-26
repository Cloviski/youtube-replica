import { useState, useEffect, useContext } from "react";
import { useSearchContext } from "../../contexts/searchContext";
import { MenuContext } from "../../contexts/menuContext";
import { MainContainer, RoutesContainer } from "../../styles/AppStyles";
import { VideoContainer } from "./searchStyles";
import { getPublishedTime } from "../../scripts/searchScripts";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import VideoSearch from "../../components/video-search/videoSearch";
import axios from "axios";
import { useWindowResize } from "../../contexts/resizeContext";

interface Videos {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    channelTitle: string;
    publishedAt: string;
    description: string;
  };
  statistics: {
    viewCount: string;
  };
}

const Search: React.FC = () => {
  const [videos, setVideosApi] = useState<Videos[]>([]);
  const { openMenu } = useContext(MenuContext);
  const { search } = useSearchContext();

  useWindowResize();

  useEffect(() => {
    load();
  }, [search]);

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=10&&key=${process.env.REACT_APP_API_KEY}`;

  async function load() {
    try {
      const response = await axios.get(url);
      setVideosApi(response.data.items);
    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <>
      <Header />
      <MainContainer>
        <Menu />
        <RoutesContainer>
          <VideoContainer openMenu={openMenu} data-cy="video-search">
            {videos.map((video, index) => (
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <VideoSearch
                  title={video.snippet.title}
                  thumbnail={video.snippet.thumbnails.high?.url}
                  channelImage={video.snippet.channelTitle
                    .charAt(0)
                    .toUpperCase()}
                  channelName={video.snippet.channelTitle}
                  details={`0 views • ${getPublishedTime(
                    video.snippet.publishedAt
                  )}`}
                  description={video.snippet.description}
                  key={index}
                />
              </a>
            ))}
          </VideoContainer>
        </RoutesContainer>
      </MainContainer>
    </>
  );
};

export default Search;
