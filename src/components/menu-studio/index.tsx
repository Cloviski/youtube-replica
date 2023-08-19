import {
  ButtonContainer,
  ChannelContainer,
  Container,
  FixedItem,
  MenuItem,
} from "./styles";
import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { ButtonIcon } from "../menu/styles";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "../../assets/setting.png";
import FeedbackIcon from "../../assets/chat.png";
import LibraryIcon from "../../assets/library.png";
import AnalyticsIcon from "../../assets/analytics.png";
import CommentIcon from "../../assets/comment.png";
import CopyrightIcon from "../../assets/copyright.png";
import EarnIcon from "../../assets/earn.png";
import WandIcon from "../../assets/magic-wand.png";
import AudioIcon from "../../assets/audio-book.png";
import SubtitleIcon from "../../assets/subtitles.png";
import DashboardIcon from "../../assets/dashboard.png";

const menuItems = [
  { label: "Dashboard", icon: DashboardIcon },
  { label: "Content", icon: LibraryIcon },
  { label: "Analytics", icon: AnalyticsIcon },
  { label: "Comments", icon: CommentIcon },
  { label: "Subtitles", icon: SubtitleIcon },
  { label: "Copyright", icon: CopyrightIcon },
  { label: "Earn", icon: EarnIcon },
  { label: "Customization", icon: WandIcon },
  { label: "Audio library", icon: AudioIcon },
];

const fixedItems = [
  { label: "Settings", icon: SettingsIcon },
  { label: "Send feedback", icon: FeedbackIcon },
];

function MenuStudio() {
  const { openMenu } = useContext(MenuContext);

  return (
    <>
      <Container openMenu={openMenu}>
        <ChannelContainer openMenu={openMenu}>
          <ButtonContainer openMenu={openMenu}>
            <span>M</span>
          </ButtonContainer>
          <span>Your channel</span>
          <span>Martin Walker</span>
        </ChannelContainer>
        {menuItems.map((menuItem) => (
          <MenuItem openMenu={openMenu} display="flex">
            <ButtonIcon alt="" src={menuItem.icon} />
            <span>{menuItem.label}</span>
          </MenuItem>
        ))}
        {fixedItems.map((menuItem) => (
          <FixedItem openMenu={openMenu} display="flex">
            <ButtonIcon alt="" src={menuItem.icon} />
            <span>{menuItem.label}</span>
          </FixedItem>
        ))}
      </Container>
    </>
  );
}

export default MenuStudio;
