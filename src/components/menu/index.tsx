import {
    useContext
} from "react";

import { 
    Container,
    MenuItem, 
} from "./styles";
import { AppContext } from "../../contexts/AppContext";
import { ButtonIcon } from "../header/styles";
import NotificationIcon from '../../assets/bell.png'

const items = [0,0,0,]

function Menu() {
    const { openMenu } = useContext(AppContext)

    return (
        <Container openMenu={openMenu}>
            {items.map(() => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={NotificationIcon}/>
                    <span>Início</span>
                </MenuItem>
            ))}
        </Container>
    )
}

export default Menu;

