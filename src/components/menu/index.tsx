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
} from "./styles";
import { AppContext } from "../../contexts/AppContext";
import { ButtonIcon } from "../menu/styles";
import HomeIcon from '../../assets/house.png'
import ShortsIcon from '../../assets/shorts.png'
import SubscriptionsIcon from '../../assets/subscribe.png'
import LibraryIcon from '../../assets/library.png'
import HistoryIcon from '../../assets/history.png'
import SignInIcon from '../../assets/profile.png'

const firstItems = [
    { label: 'Home', icon: HomeIcon },
    { label: 'Shorts', icon: ShortsIcon },
    { label: 'Subscriptions', icon: SubscriptionsIcon },
];

const secondItems = [
    { label: 'Library', icon: LibraryIcon },
    { label: 'History', icon: HistoryIcon },
];
  

function Menu() {
    const { openMenu } = useContext(AppContext)

    return (
        <Container openMenu={openMenu}>
            <InnerContainer openMenu={openMenu}>
                {firstItems.map((menuItem) => (
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="" src={menuItem.icon}/>
                        <span>{menuItem.label}</span>
                    </MenuItem>
                ))}
            </InnerContainer>
            <InnerContainer openMenu={openMenu}>
                {secondItems.map((menuItem) => (
                    <MenuItem openMenu={openMenu}>
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
                        <span>Sign In</span>
                    </SignMenuContainer>
                </TextMenuItem>
            </TextInnerContainer>
        </Container>
    )
}

export default Menu;

//I want to make all menu objects appear here as a string

