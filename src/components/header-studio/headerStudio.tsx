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
  AccountContainer,
  AccountDropDown,
} from "./headerStudioStyles";
import ManageProfileIcon from "../../assets/exchange.png";
import YTStudioLineIcon from "../../assets/youtube.png";
import VideoCreateIcon from "../../assets/video-create.png";
import RightArrowIcon from "../../assets/greater-than-symbol.png";
import HamburgerIcon from "../../assets/hamburger.png";
import FeedbackIcon from "../../assets/chat.png";
import ProfileIcon from "../../assets/profile_line.png";
import SignOutIcon from "../../assets/logout.png";
import SearchIcon from "../../assets/search.png";
import HelpIcon from "../../assets/help.png";
import MoonIcon from "../../assets/moon.png";
import YTStudioLogo from "../../assets/yt_studio.png";
import { ModalContext } from "../../contexts/modalContext";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../contexts/menuContext";
import { useContext } from "react";

const HeaderStudio: React.FC = () => {
  const menuFirstItems = [
    { label: "Your channel", icon: ProfileIcon, link: "/your-videos" },
    { label: "YouTube", icon: YTStudioLineIcon, link: "/" },
    {
      label: "Switch account",
      icon: ManageProfileIcon,
      arrow: RightArrowIcon,
      link: "/login",
    },
  ];

  const menuSecondItems = [
    { label: "Appearance: Light", icon: MoonIcon, arrow: RightArrowIcon },
    { label: "Send feedback", icon: FeedbackIcon },
  ];

  const { openMenu, setOpenMenu } = useContext(MenuContext);
  const { login, user, logOut, dropDownMenu, setDropDownMenu } =
    useContext(UserContext);
  const { hideModal, setHideModal } = useContext(ModalContext);
  const navigate = useNavigate();

  return (
    <Container>
      <LogoContainer>
        <ButtonContainer
          margin="0 10px 0 0"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <ButtonIcon alt="" src={HamburgerIcon} />
        </ButtonContainer>
        <YoutubeLogo alt="" src={YTStudioLogo} />
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
        <CreateVideoContainer data-cy="create-video-modal" onClick={() => setHideModal(!hideModal)}>
          <ButtonIcon alt="" src={VideoCreateIcon} />
          <span>CREATE</span>
        </CreateVideoContainer>
        {login ? (
          <>
            <AccountContainer
              margin="0 0 0 10px"
              onClick={() => setDropDownMenu(!dropDownMenu)}
            >
              <span>{user.name ? user.name.charAt(0).toUpperCase() : "?"}</span>
            </AccountContainer>
            <DropDownContainer dropDownMenu={dropDownMenu}>
              <ProfileContainer>
                <AccountDropDown margin="0 16px 0 0">
                  <span>
                    {user.name ? user.name.charAt(0).toUpperCase() : "?"}
                  </span>
                </AccountDropDown>
                <ProfileTextContainer>
                  <span>{user.name ? user.name : "?"}</span>
                  <span>Manage your Google Account</span>
                </ProfileTextContainer>
              </ProfileContainer>
              <InnerDropDownContainer>
                {menuFirstItems.map((dropDownItem) => (
                  <DropDownItem onClick={() => navigate(dropDownItem.link)}>
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
};

export default HeaderStudio;
