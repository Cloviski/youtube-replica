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
  AccountContainer,
} from "./styles";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../contexts/menuContext";
import { UserContext } from "../../contexts/userContext";
import { useSearchContext } from "../../contexts/searchContext";
import { SignMenuContainer } from "./styles";
import HamburgerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/youtube_logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microphone.png";
import VideoIcon from "../../assets/video-camera.png";
import NotificationIcon from "../../assets/bell.png";
import SignInIcon from "../../assets/profile.png";
import FeedbackIcon from "../../assets/chat.png";
import HelpIcon from "../../assets/help.png";
import SettingsIcon from "../../assets/setting.png";
import ProfileIcon from "../../assets/profile_line.png";
import YTStudioLineIcon from "../../assets/youtube-studio-line.png";
import SignOutIcon from "../../assets/logout.png";
import PurchaseIcon from "../../assets/dollar.png";
import ProfileShildIcon from "../../assets/personal-security.png";
import MoonIcon from "../../assets/moon.png";
import LanguageIcon from "../../assets/translate.png";
import ShildIcon from "../../assets/security.png";
import GlobalIcon from "../../assets/global.png";
import KeyboardIcon from "../../assets/keyboard.png";
import ManageProfileIcon from "../../assets/exchange.png";
import RightArrowIcon from "../../assets/greater-than-symbol.png";

const menuFirstItems = [
  { label: "Your channel", icon: ProfileIcon, link: "your-videos" },
  { label: "YouTube Studio", icon: YTStudioLineIcon, link: "your-videos" },
  {
    label: "Switch account",
    icon: ManageProfileIcon,
    arrow: RightArrowIcon,
    link: "login",
  },
];

const menuSecondItems = [
  { label: "Purchases and merberships", icon: PurchaseIcon },
  { label: "Your data in YouTube", icon: ProfileShildIcon },
];

const menuThirdItems = [
  { label: "Appearance: Light", icon: MoonIcon, arrow: RightArrowIcon },
  { label: "Language: English", icon: LanguageIcon, arrow: RightArrowIcon },
  { label: "Restricted Mode: Off", icon: ShildIcon, arrow: RightArrowIcon },
  { label: "Location: United States", icon: GlobalIcon, arrow: RightArrowIcon },
  { label: "Keyboard shortcuts", icon: KeyboardIcon },
];

const menuForthItems = [{ label: "Settings", icon: SettingsIcon }];

const menuFifthItems = [
  { label: "Help", icon: HelpIcon },
  { label: "Send feedback", icon: FeedbackIcon },
];

function Header() {
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  const { user, login, logOut, dropDownMenu, setDropDownMenu } =
    useContext(UserContext);
  const { setSearch } = useSearchContext();
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  function handleSearch(searchInput: string) {
    setSearchInput(searchInput);
  }

  return (
    <Container>
      <LogoContainer>
        <ButtonContainer
          onClick={() => setOpenMenu(!openMenu)}
          margin="0 10px 0 0"
        >
          <ButtonIcon alt="" src={HamburgerIcon} />
        </ButtonContainer>
        <YoutubeLogo onClick={() => navigate("/")} src={Logo} />
      </LogoContainer>
      <SearchContainer>
        <SearchInputContainer>
          <SearchInput
            placeholder="Search"
            value={searchInput}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearch(searchInput);
                navigate("/search");
              }
            }}
          />
        </SearchInputContainer>
        <SearchButton
          onClick={() => {
            setSearch(searchInput);
            navigate("/search");
          }}
        >
          <ButtonIcon alt="" src={SearchIcon} />
        </SearchButton>
      </SearchContainer>
      <HeaderButton>
        <ButtonContainer margin="0 10px 0 0">
          <ButtonIcon
            alt=""
            src={VideoIcon}
            onClick={() => navigate("/your-videos")}
          />
        </ButtonContainer>
        <ButtonContainer margin="0 10px 0 0">
          <ButtonIcon alt="" src={NotificationIcon} />
        </ButtonContainer>
        {login ? (
          <>
            <AccountContainer
              margin="0 0 0 10px"
              onClick={() => setDropDownMenu(!dropDownMenu)}
            >
              <span>
                {user && user.name ? user.name.charAt(0).toUpperCase() : "?"}
              </span>
            </AccountContainer>
            <DropDownContainer dropDownMenu={dropDownMenu}>
              <ProfileContainer>
                <AccountContainer margin="0 16px 0 0">
                  <span>
                    {user && user.name
                      ? user.name.charAt(0).toUpperCase()
                      : "?"}
                  </span>
                </AccountContainer>
                <ProfileTextContainer>
                  <span>Claudio Ribeiro</span>
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
              <InnerDropDownContainer>
                {menuThirdItems.map((dropDownItem) => (
                  <DropDownItem>
                    <DropDownIcon alt="" src={dropDownItem.icon} />
                    <span>{dropDownItem.label}</span>
                    <ArrowIcon alt="" src={dropDownItem.arrow} />
                  </DropDownItem>
                ))}
              </InnerDropDownContainer>
              <InnerDropDownContainer>
                {menuForthItems.map((dropDownItem) => (
                  <DropDownItem>
                    <DropDownIcon alt="" src={dropDownItem.icon} />
                    <span>{dropDownItem.label}</span>
                  </DropDownItem>
                ))}
              </InnerDropDownContainer>
              <InnerDropDownContainer>
                {menuFifthItems.map((dropDownItem) => (
                  <DropDownItem>
                    <DropDownIcon alt="" src={dropDownItem.icon} />
                    <span>{dropDownItem.label}</span>
                  </DropDownItem>
                ))}
              </InnerDropDownContainer>
            </DropDownContainer>
          </>
        ) : (
          <SignMenuContainer onClick={() => navigate("/login")}>
            <ButtonIcon alt="" src={SignInIcon} />
            <span>Sign in</span>
          </SignMenuContainer>
        )}
      </HeaderButton>
    </Container>
  );
}

export default Header;

// line 63 make this part dynamic
