import { VideoContainer } from "./homeStyles";
import { useContext, useEffect, useState } from "react";
import { MainContainer, RoutesContainer } from "../../AppStyles";
import { useCategoryContext } from "../../contexts/categoryContext";
import { MenuContext } from "../../contexts/menuContext";
import useWindowResize from "../../contexts/resizeContext";
import Category from "../../components/category/category";
import Header from "../../components/header/header";
import Menu from "../../components/menu/menu";
import axios from "axios";
import moment from "moment";
import VideoHome from "../../components/video-home/videoHome";

function Home() {
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
      channelTitle: string;
      publishedAt: string;
    };
    statistics: {
      viewCount: string;
    };
  }

  const [videos, setVideos] = useState<VideosProps[]>([]);
  const { categoryId } = useCategoryContext();
  const { openMenu } = useContext(MenuContext);

  useWindowResize();

  async function load() {
    try {
      const response = await axios.get(url);
      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  const API_KEY = "AIzaSyAhMOB3BdU2G8PYMWcRphoY0qZ7mLlLJaY";
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=en_US&maxResults=15&regionCode=us&videoCategoryId=${categoryId}&key=${API_KEY}`;

  useEffect(() => {
    load();
  }, [categoryId]);

  function formatViewCount(viewCount: number): string {
    if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(0)}M views`;
    } else if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(0)}K views`;
    } else {
      return `${viewCount} views`;
    }
  }

  function getPublishedTime(publishedAt: string) {
    const now = moment();
    const publishedTime = moment(publishedAt);
    const diffDays = now.diff(publishedTime, "days");

    if (diffDays <= 0) {
      return "today";
    } else if (diffDays === 1) {
      return "1 day ago";
    } else if (diffDays <= 7) {
      return `${diffDays} days ago`;
    } else if (diffDays <= 30) {
      const diffWeeks = Math.floor(diffDays / 7);
      if (diffWeeks === 1) {
        return "1 week ago";
      } else {
        return `${diffWeeks} weeks ago`;
      }
    } else if (diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30);
      if (diffMonths === 1) {
        return "1 month ago";
      } else {
        return `${diffMonths} months ago`;
      }
    } else {
      const diffYears = Math.floor(diffDays / 365);
      if (diffYears === 1) {
        return "1 year ago";
      } else {
        return `${diffYears} years ago`;
      }
    }
  }

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
