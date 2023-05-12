import {
    useContext
} from "react";

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
import { AppContext } from "../../contexts/AppContext";
import { ButtonIcon } from "../menu/styles";
import HomeIcon from '../../assets/house.png'
import ShortsIcon from '../../assets/shorts.png'
import SubscriptionsIcon from '../../assets/subscribe.png'
import LibraryIcon from '../../assets/library.png'
import HistoryIcon from '../../assets/history.png'
import SignInIcon from '../../assets/profile.png'
import TrendingIcon from '../../assets/fire (1).png'
import MusicIcon from '../../assets/music.png'
import MoviesIcon from '../../assets/clapperboard.png'
import LiveIcon from '../../assets/live (1).png'
import GamingIcon from '../../assets/gaming.png'
import NewsIcon from '../../assets/news.png'
import SportsIcon from '../../assets/trophy.png'
import LearningIcon from '../../assets/lightbulb.png'
import YTPremiumIcon from '../../assets/youtube_pure_logo.png'
import YTMusicIcon from '../../assets/youtube_music.png'
import YTKidsIcon from '../../assets/youtube_kids.png'
import SettingsIcon from '../../assets/setting.png'
import ReportIcon from '../../assets/flag.png'
import HelpIcon from '../../assets/help.png'
import FeedbackIcon from '../../assets/chat.png'
import BrowseIcon from '../../assets/plus.png'
import { useNavigate } from "react-router-dom";

const firstItems = [
    { label: 'Home', icon: HomeIcon, link: '/' },
    { label: 'Shorts', icon: ShortsIcon, link: '/' },
    { label: 'Subscriptions', icon: SubscriptionsIcon, link: '/' },
];

const secondItems = [
    { label: 'Library', icon: LibraryIcon, link: '/library' },
    { label: 'History', icon: HistoryIcon, link: '/history' },
];

const thirdItems = [
    { label: 'Trending', icon: TrendingIcon },
    { label: 'Music', icon: MusicIcon },
    { label: 'Movies & Shows', icon: MoviesIcon },
    { label: 'Live', icon: LiveIcon },
    { label: 'Gaming', icon: GamingIcon },
    { label: 'News', icon: NewsIcon },
    { label: 'Sports', icon: SportsIcon },
    { label: 'Learning', icon: LearningIcon },
];

const forthItems = [
    { label: 'Youtube Premium', icon: YTPremiumIcon },
    { label: 'Youtube Music', icon: YTMusicIcon },
    { label: 'Youtube Kids', icon: YTKidsIcon },
];

const fifthItems = [
    { label: 'Settings', icon: SettingsIcon },
    { label: 'Report history', icon: ReportIcon },
    { label: 'Help', icon: HelpIcon },
    { label: 'Send feedback', icon: FeedbackIcon },
];

const firstSpanItems = [
    { label: 'About' },
    { label: 'Press' },
    { label: 'Copyright' },
    { label: 'Contact us' },
    { label: 'Creators' },
    { label: 'Advertise' },
    { label: 'Developers' },
]

const secondSpanItems = [
    { label: 'Terms' },
    { label: 'Privacy' },
    { label: 'Policy & Safety' },
    { label: 'How YouTube works' },
    { label: 'Test new features' },
]

function Menu() {
    const navigate = useNavigate();
    const { openMenu } = useContext(AppContext);

    return (
        <Container openMenu={openMenu}>
            <InnerContainer openMenu={openMenu}>
                {firstItems.map((menuItem) => (
                    <MenuItem openMenu={openMenu} visibility="visible" onClick={() => navigate(menuItem.link)}>
                        <ButtonIcon alt="" src={menuItem.icon}/>
                        <span>{menuItem.label}</span>
                    </MenuItem>
                ))}
            </InnerContainer>
            <InnerContainer openMenu={openMenu}>
                {secondItems.map((menuItem) => (
                    <MenuItem openMenu={openMenu} visibility="visible" onClick={() => navigate(menuItem.link)}>
                        <ButtonIcon alt="" src={menuItem.icon}/>
                        <span>{menuItem.label}</span>
                    </MenuItem>
                ))}
            </InnerContainer>
            <TextInnerContainer openMenu={openMenu}>
                <TextMenuItem openMenu={openMenu}>
                    <span>Sign in to like videos, comment, and subscribe.</span>
                    <SignMenuContainer>
                        <ButtonIcon alt="" src={SignInIcon} />
                        <span>Sign in</span>
                    </SignMenuContainer>
                </TextMenuItem>
            </TextInnerContainer>
            <InnerContainer openMenu={openMenu}>
                <SpanMenuItem openMenu={openMenu}>Explore</SpanMenuItem>
                {thirdItems.map((menuItem) => (
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="" src={menuItem.icon}/>
                        <span>{menuItem.label}</span>
                    </MenuItem>
                ))}
            </InnerContainer>
            <InnerContainer openMenu={openMenu}>
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="" src={BrowseIcon}/>
                        <span>Browse channels</span>
                    </MenuItem>
            </InnerContainer>
            <InnerContainer openMenu={openMenu}>
                <SpanMenuItem openMenu={openMenu}>More from YouTube</SpanMenuItem>
                {forthItems.map((menuItem) => (
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="" src={menuItem.icon}/>
                        <span>{menuItem.label}</span>
                    </MenuItem>
                ))}
            </InnerContainer>
            <InnerContainer openMenu={openMenu}>
                {fifthItems.map((menuItem) => (
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="" src={menuItem.icon}/>
                        <span>{menuItem.label}</span>
                    </MenuItem>
                ))}
            </InnerContainer>
            <PrimaryFooterMenu openMenu={openMenu}>
                {firstSpanItems.map((spanItem) => (
                    <span>{spanItem.label}</span>
                ))}
            </PrimaryFooterMenu>
            <SecondaryFooterMenu openMenu={openMenu}>
                {secondSpanItems.map((spanItem) => (
                    <span>{spanItem.label}</span>
                ))}
            </SecondaryFooterMenu>
            <Copyright openMenu={openMenu}>
                <span>© 2023 Google LLC</span>
            </Copyright>
        </Container>
    )
}

export default Menu;

//I want to make all menu objects appear here as a string

