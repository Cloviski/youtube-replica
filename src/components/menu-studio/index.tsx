import {
    Container,
    InnerContainer,
    TextInnerContainer,
    MenuItem,
    TextMenuItem,
    SignMenuContainer,
    SpanMenuItem,
    PrimaryFooterMenu,
    SecondaryFooterMenu,
    Copyright,
  } from "./styles";
  import { useContext } from "react";
  import { MenuContext } from "../../contexts/menuContext";
  import { UserContext } from "../../contexts/userContext";
  import { ButtonIcon } from "../menu/styles";
  import { useNavigate } from "react-router-dom";
  import HomeIcon from "../../assets/house.png";
  import ShortsIcon from "../../assets/shorts.png";
  import SubscriptionsIcon from "../../assets/subscribe.png";
  import LibraryIcon from "../../assets/library.png";
  import HistoryIcon from "../../assets/history.png";
  import SignInIcon from "../../assets/profile.png";
  import TrendingIcon from "../../assets/fire (1).png";
  import MusicIcon from "../../assets/music.png";
  import MoviesIcon from "../../assets/clapperboard.png";
  import LiveIcon from "../../assets/live (1).png";
  import GamingIcon from "../../assets/gaming.png";
  import NewsIcon from "../../assets/news.png";
  import SportsIcon from "../../assets/trophy.png";
  import LearningIcon from "../../assets/lightbulb.png";
  import YTPremiumIcon from "../../assets/youtube_pure_logo.png";
  import YTMusicIcon from "../../assets/youtube_music.png";
  import YTKidsIcon from "../../assets/youtube_kids.png";
  import SettingsIcon from "../../assets/setting.png";
  import ReportIcon from "../../assets/flag.png";
  import HelpIcon from "../../assets/help.png";
  import FeedbackIcon from "../../assets/chat.png";
  import BrowseIcon from "../../assets/plus.png";
  
  const firstItems = [
    { label: "Home", icon: HomeIcon, link: "/" },
    { label: "Shorts", icon: ShortsIcon, link: "/" },
    { label: "Subscriptions", icon: SubscriptionsIcon, link: "/" },
  ];
  
  const secondItems = [
    { label: "Library", icon: LibraryIcon },
    { label: "History", icon: HistoryIcon },
  ];
  
  const thirdItems = [
    { label: "Trending", icon: TrendingIcon },
    { label: "Music", icon: MusicIcon },
    { label: "Movies & Shows", icon: MoviesIcon },
    { label: "Live", icon: LiveIcon },
    { label: "Gaming", icon: GamingIcon },
    { label: "News", icon: NewsIcon },
    { label: "Sports", icon: SportsIcon },
    { label: "Learning", icon: LearningIcon },
  ];
  
  const forthItems = [
    { label: "Youtube Premium", icon: YTPremiumIcon },
    { label: "Youtube Music", icon: YTMusicIcon },
    { label: "Youtube Kids", icon: YTKidsIcon },
  ];
  
  const fifthItems = [
    { label: "Settings", icon: SettingsIcon },
    { label: "Report history", icon: ReportIcon },
    { label: "Help", icon: HelpIcon },
    { label: "Send feedback", icon: FeedbackIcon },
  ];
  
  const firstSpanItems = [
    { label: "About" },
    { label: "Press" },
    { label: "Copyright" },
    { label: "Contact us" },
    { label: "Creators" },
    { label: "Advertise" },
    { label: "Developers" },
  ];
  
  const secondSpanItems = [
    { label: "Terms" },
    { label: "Privacy" },
    { label: "Policy & Safety" },
    { label: "How YouTube works" },
    { label: "Test new features" },
  ];
  
  function MenuStudio() {
    const navigate = useNavigate();
    const { openMenu } = useContext(MenuContext);
    const { login } = useContext(UserContext);
  
    return (
      <Container openMenu={openMenu}>
        <InnerContainer openMenu={openMenu}>
          {firstItems.map((menuItem) => (
            <MenuItem
              openMenu={openMenu}
              display="flex"
              onClick={() => navigate(menuItem.link)}
            >
              <ButtonIcon alt="" src={menuItem.icon} />
              <span>{menuItem.label}</span>
            </MenuItem>
          ))}
        </InnerContainer>
      </Container>
    );
  }
  
  export default MenuStudio;
  