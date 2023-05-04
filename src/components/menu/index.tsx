import {
    useContext
} from "react";

import { 
    Container,
    InnerContainer,
    MenuItem, 
} from "./styles";
import { AppContext } from "../../contexts/AppContext";
import { ButtonIcon } from "../menu/styles";
import HomeIcon from '../../assets/house.png'
import ShortsIcon from '../../assets/shorts.png'
import SubscriptionsIcon from '../../assets/subscribe.png'
import LibraryIcon from '../../assets/library.png'
import HistoryIcon from '../../assets/history.png'

const primaryItems = [
    { label: 'Home', icon: HomeIcon },
    { label: 'Shorts', icon: ShortsIcon },
    { label: 'Subscriptions', icon: SubscriptionsIcon },
];

const secondaryItems = [
    { label: 'Library', icon: LibraryIcon },
    { label: 'History', icon: HistoryIcon },
];
  

function Menu() {
    const { openMenu } = useContext(AppContext)

    return (
        <Container openMenu={openMenu}>
            <InnerContainer openMenu={openMenu}>
                {primaryItems.map((menuItem) => (
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="" src={menuItem.icon}/>
                        <span>{menuItem.label}</span>
                    </MenuItem>
                ))}
            </InnerContainer>
            <InnerContainer openMenu={openMenu}>
                {secondaryItems.map((menuItem) => (
                    <MenuItem openMenu={openMenu}>
                        <ButtonIcon alt="" src={menuItem.icon}/>
                        <span>{menuItem.label}</span>
                    </MenuItem>
                ))}
            </InnerContainer>
        </Container>
    )
}

export default Menu;

//I want to make all menu objects appear here as a string

