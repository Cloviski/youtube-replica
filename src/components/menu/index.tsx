import {
    useContext
} from "react";

import { 
    Container,
    MenuItem, 
} from "./styles";
import { AppContext } from "../../contexts/AppContext";
import { ButtonIcon } from "../menu/styles";
import HomeIcon from '../../assets/homepage.png'
import ShortsIcon from '../../assets/shorts.png'
import SubscriptionsIcon from '../../assets/subscribe.png'

const menuItems = [
    { label: 'Home', icon: HomeIcon },
    { label: 'Shorts', icon: ShortsIcon },
    { label: 'Subscriptions', icon: SubscriptionsIcon },
];
  

function Menu() {
    const { openMenu } = useContext(AppContext)

    return (
        <Container openMenu={openMenu}>
            {menuItems.map((menuItem) => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={menuItem.icon}/>
                    <span>{menuItem.label}</span>
                </MenuItem>
            ))}
        </Container>
    )
}

export default Menu;

//I want to make all menu objects appear here as a string

