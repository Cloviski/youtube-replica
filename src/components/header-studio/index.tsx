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
  YoutubeLogo,
  DropDownContainer,
  ProfileContainer,
  ProfileTextContainer,
  InnerDropDownContainer,
  DropDownItem,
  DropDownIcon,
  ArrowIcon,
  CreateVideoContainer,
} from "./styles";
import HamburgerIcon from "../../assets/hamburger.png";
import YTStudioLogo from "../../assets/yt_studio.png";
import SearchIcon from "../../assets/search.png";
import VideoIcon from "../../assets/video.png";
import FeedbackIcon from "../../assets/chat.png";
import HelpIcon from "../../assets/help.png";
import ProfileIcon from "../../assets/profile_line.png";
import YTStudioLineIcon from "../../assets/youtube.png";
import SignOutIcon from "../../assets/logout.png";
import MoonIcon from "../../assets/moon.png";
import ManageProfileIcon from "../../assets/exchange.png";
import RightArrowIcon from "../../assets/greater-than-symbol.png";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../contexts/menuContext";

const menuFirstItems = [
  { label: "Your channel", icon: ProfileIcon },
  { label: "YouTube", icon: YTStudioLineIcon },
  { label: "Switch account", icon: ManageProfileIcon, arrow: RightArrowIcon },
];

const menuSecondItems = [
  { label: "Appearance: Light", icon: MoonIcon, arrow: RightArrowIcon },
  { label: "Send feedback", icon: FeedbackIcon },
];

function HeaderStudio() {
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  const { user, userVideos, createVideos, token } = useContext(UserContext);
  const { login, logOut, dropDownMenu, setDropDownMenu } =
    useContext(UserContext);
  const USER_ID = user.id;
  const navigate = useNavigate();

  return (
    <Container>
      <LogoContainer>
        <ButtonContainer margin="0 10px 0 0">
          <ButtonIcon
            alt=""
            src={HamburgerIcon}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </ButtonContainer>
        <YoutubeLogo onClick={() => navigate("/")} src={YTStudioLogo} />
      </LogoContainer>
      <SearchContainer>
        <SearchButton>
          <ButtonIcon alt="" src={SearchIcon} />
        </SearchButton>
        <SearchInputContainer>
          <SearchInput placeholder="Search across your channel" />
        </SearchInputContainer>
      </SearchContainer>
      <HeaderButton>
        <ButtonContainer margin="0 10px 0 0">
          <ButtonIcon alt="" src={HelpIcon} />
        </ButtonContainer>
        <CreateVideoContainer onClick={() => navigate("/login")}>
          <ButtonIcon alt="" src={VideoIcon} />
          <span>CREATE</span>
        </CreateVideoContainer>
        {login ? (
          <>
            <ButtonContainer
              margin="0 0 0 10px"
              onClick={() => setDropDownMenu(!dropDownMenu)}
            >
              MW
            </ButtonContainer>
            <DropDownContainer dropDownMenu={dropDownMenu}>
              <ProfileContainer>
                <ButtonContainer margin="0 16px 0 0">MW</ButtonContainer>
                <ProfileTextContainer>
                  <span>Claudio Ribeiro</span>
                  <span>Manage your Google Account</span>
                </ProfileTextContainer>
              </ProfileContainer>
              <InnerDropDownContainer>
                {menuFirstItems.map((dropDownItem) => (
                  <DropDownItem>
                    <DropDownIcon alt="" src={dropDownItem.icon} />
                    <span>{dropDownItem.label}</span>
                    <ArrowIcon alt="" src={dropDownItem.arrow} />
                  </DropDownItem>
                ))}
                <DropDownItem onClick={() => logOut()}>
                  <DropDownIcon alt="" src={SignOutIcon} />
                  <span>Sign out</span>
                </DropDownItem>
              </InnerDropDownContainer>
              <InnerDropDownContainer>
                {menuSecondItems.map((dropDownItem) => (
                  <DropDownItem>
                    <DropDownIcon alt="" src={dropDownItem.icon} />
                    <span>{dropDownItem.label}</span>
                  </DropDownItem>
                ))}
              </InnerDropDownContainer>
            </DropDownContainer>
          </>
        ) : null}
      </HeaderButton>
    </Container>
  );
}

export default HeaderStudio;
