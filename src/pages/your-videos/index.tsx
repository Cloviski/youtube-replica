import { MainContainer, RoutesContainer } from "../../AppStyles";
import HeaderStudio from "../../components/header-studio";
import MenuStudio from "../../components/menu-studio";
import {
  Checkbox,
  FilterContainer,
  H1Title,
  Icon,
  IconContainer,
  ImageBanner,
  Modal,
  ModalContainer,
  ModalContent,
  ModalHeader,
  NavContainer,
  SpanContainer,
  SpanVideoContainer,
  TableContentContainer,
  TableHeader,
  TableVideoContainer,
  TitleTextBox,
  VisibilityContainer,
} from "./styles";
import FilterIcon from "../../assets/filter.png";
import EyeIcon from "../../assets/view.png";
import FeedbackIcon from "../../assets/chat.png";
import CloseIcon from "../../assets/x.png";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modalContext";

interface Videos {
  title: string;
  video_id: string;
  thumbnail: string;
  description: string;
  publishedAt: string;
}

const firstItems = [
  { label: "Videos" },
  { label: "Live" },
  { label: "Playlists" },
  { label: "Podcasts" },
  { label: "Promotions" },
];

const tableItems = [
  { label: "Video" },
  { label: "Visibility" },
  { label: "Restrictions" },
  { label: "Date" },
  { label: "Views" },
  { label: "Comments" },
  { label: "Likes (vs. dislikes)" },
];

function YourVideos() {
  const { hideModal, setHideModal } = useContext(ModalContext);

  return (
    <>
      <HeaderStudio />
      <MainContainer>
        <MenuStudio />
        <RoutesContainer>
          <H1Title>Channel content</H1Title>
          <NavContainer>
            {firstItems.map((menuItem) => (
              <span>{menuItem.label}</span>
            ))}
          </NavContainer>
          <FilterContainer>
            <Icon alt="" src={FilterIcon} />
            <span>Filter</span>
          </FilterContainer>
          <TableHeader>
            <Checkbox type="checkbox" />
            {tableItems.map((tableItem) => (
              <div>
                <span>{tableItem.label}</span>
              </div>
            ))}
          </TableHeader>
          <Modal hideModal={hideModal}>
            <ModalContainer>
              <ModalHeader>
                <h3>Upload videos</h3>
                <IconContainer>
                  <Icon alt="" src={FeedbackIcon} />
                  <Icon
                    alt=""
                    src={CloseIcon}
                    onClick={() => setHideModal(!hideModal)}
                  />
                </IconContainer>
              </ModalHeader>
              <ModalContent>
                <TitleTextBox
                  type="textbox"
                  placeholder="Title"
                />
              </ModalContent>
            </ModalContainer>
          </Modal>
          <TableContentContainer>
            <Checkbox type="checkbox" />
            <TableVideoContainer>
              <ImageBanner
                alt="thumbnail"
                src="https://images3.alphacoders.com/567/567308.jpg"
              />
              <SpanVideoContainer>
                <span>How I lost my sanity in Dubai...</span>
                <span>Add description</span>
              </SpanVideoContainer>
            </TableVideoContainer>
            <VisibilityContainer>
              <Icon alt="" src={EyeIcon} />
              <span>Unlisted</span>
            </VisibilityContainer>
            <SpanContainer>
              <span>None</span>
            </SpanContainer>
            <SpanContainer>
              <span>May 21, 2023</span>
              <span>Uploaded</span>
            </SpanContainer>
            <SpanContainer>
              <span>0</span>
            </SpanContainer>
            <SpanContainer>
              <span>0</span>
            </SpanContainer>
            <SpanContainer>
              <span>-</span>
            </SpanContainer>
          </TableContentContainer>
        </RoutesContainer>
      </MainContainer>
    </>
  );
}

export default YourVideos;

/*
By submitting your videos to YouTube, you acknowledge that you agree to YouTube's Terms of Service and Community Guidelines.

Please be sure not to violate others' copyright or privacy rights. Learn more
*/
