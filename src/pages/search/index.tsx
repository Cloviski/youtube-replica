import { useState, useEffect, useContext } from "react";
import { useSearchContext } from "../../contexts/searchContext";
import { MenuContext } from "../../contexts/menuContext";
import { MainContainer, RoutesContainer } from "../../AppStyles";
import { VideoContainer } from "./styles";
import Header from "../../components/header";
import Menu from "../../components/menu";
import VideoSearch from "../../components/video-search";
import axios from "axios";
import moment from "moment";

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

function Search() {
  const { openMenu } = useContext(MenuContext);
  const { search } = useSearchContext();

  useEffect(() => {
    load();
  }, [search]);

  const [videos, setVideosApi] = useState<Videos[]>([]);
  //const API_KEY = "AIzaSyDLJCiB55monK9yAkvBEvcX4CjUMVNKRcg";
  const API_KEY = "AIzaSyAhMOB3BdU2G8PYMWcRphoY0qZ7mLlLJaY";
  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=10&&key=${API_KEY}`;

  async function load() {
    try {
      const response = await axios.get(URL);
      setVideosApi(response.data.items);
    } catch (erro) {
      console.log(erro);
    }
  }

  function getPublishedTime(publishedAt: string) {
    const now = moment();
    const publishedTime = moment(publishedAt);
    const diffDays = now.diff(publishedTime, "days");

    if (diffDays <= 0) {
      return "today";
    } else if (diffDays === 1) {
      return "1 day ag";
    } else if (diffDays <= 7) {
      return `${diffDays} days ag`;
    } else if (diffDays <= 30) {
      const diffWeeks = Math.floor(diffDays / 7);
      if (diffWeeks === 1) {
        return "1 week ag";
      } else {
        return `${diffWeeks} weeks ag`;
      }
    } else if (diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30);
      if (diffMonths === 1) {
        return "1 month ag";
      } else {
        return `${diffMonths} months ag`;
      }
    } else {
      const diffYears = Math.floor(diffDays / 365);
      if (diffYears === 1) {
        return "1 year ag";
      } else {
        return `${diffYears} years ag`;
      }
    }
  }

  return (
    <>
      <Header />
      <MainContainer>
        <Menu />
        <RoutesContainer>
          <VideoContainer openMenu={openMenu}>
            {videos.map((video, index) => (
              <VideoSearch
                title={video.snippet.title}
                thumbnail={video.snippet.thumbnails.high?.url}
                channelImage={video.snippet.channelTitle
                  .charAt(0)
                  .toUpperCase()}
                channelName={video.snippet.channelTitle}
                details={`0 views • ${getPublishedTime(video.snippet.publishedAt)}`}
                description={video.snippet.description}
                key={index}
              />
            ))}
          </VideoContainer>
        </RoutesContainer>
      </MainContainer>
    </>
  );
}

export default Search;
