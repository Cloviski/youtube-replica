import { 
    Container, 
    LogoContainer, 
    ButtonContainer, 
    ButtonIcon, 
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    YoutubeLogo
} from "./styles";
import HamburgerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/youtube_logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microphone.png';
import VideoIcon from '../../assets/video.png'
import NotificationIcon from '../../assets/bell.png'
import SignInIcon from '../../assets/profile.png'
import { useContext } from 'react';
import { MenuContext } from "../../contexts/menuContext";
import { SignMenuContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";



function Header() {
    const { openMenu, setOpenMenu } = useContext(MenuContext)
    const { login, logOut } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburgerIcon}/>
                </ButtonContainer>
                <YoutubeLogo onClick={() => navigate('/')} src={Logo} />
            </LogoContainer>
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Search" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 8px'>
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
                    {login?
                    <>
                        <ButtonContainer margin='0 0 0 10px'>
                            MW 
                        </ButtonContainer>
                        <span onClick={() => logOut()}>Sair</span>
                    </>
                    :
                    <SignMenuContainer onClick={() => navigate('/login')}>
                        <ButtonIcon alt="" src={SignInIcon} />
                        <span>Sign in</span>
                    </SignMenuContainer>
                    }
                </HeaderButton>
        </Container>
    )
}

export default Header;

// line 63 make this part dynamic
