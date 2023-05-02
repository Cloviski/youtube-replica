import { 
    Container, 
    LogoContainer, 
    ButtonContainer, 
    ButtonIcon, 
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton
} from "./styles";
import HamburgerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/youtube_logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microphone.png';
import VideoIcon from '../../assets/video.png'
import NotificationIcon from '../../assets/bell.png'
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";



function Header() {
    const {openMenu ,setOpenMenu} = useContext(AppContext)

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburgerIcon}/>
                </ButtonContainer>
                <img 
                    style={{ cursor: 'pointer', width: '90px', padding: '6px' }}
                    alt=""
                    src={Logo}
                />
            </LogoContainer>
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Search" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>
                <HeaderButton>
                <ButtonContainer margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={NotificationIcon}/>
                </ButtonContainer>
                </HeaderButton>
        </Container>
    )
}

export default Header;

