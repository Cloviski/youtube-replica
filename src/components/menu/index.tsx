import {
    useContext
} from "react";

import { 
    Container, MenuItem, 
} from "./styles";
import { AppContext } from "../../contexts/AppContext";

const items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]



function Menu() {
    const { openMenu } = useContext(AppContext)

    return (
        <Container openMenu={openMenu}>
            {items.map(() => (
                <MenuItem>
                    Home
                </MenuItem>
            ))}
        </Container>
    )
}

export default Menu;

