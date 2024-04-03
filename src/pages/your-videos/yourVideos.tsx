/* eslint-disable jsx-a11y/anchor-is-valid */
import { MainContainer, RoutesContainer } from "../../styles/AppStyles";
import HeaderStudio from "../../components/header-studio/headerStudio";
import MenuStudio from "../../components/menu-studio/menuStudio";
import {
  Checkbox,
  DescriptionTextBox,
  FilterContainer,
  H1Title,
  Icon,
  IconContainer,
  MessageContainer,
  Modal,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
  NavContainer,
  SaveButton,
  TableHeader,
  ThumbnailTextBox,
  TitleTextBox,
} from "./yourVideosStyles";
import FilterIcon from "../../assets/filter.png";
import FeedbackIcon from "../../assets/chat.png";
import CloseIcon from "../../assets/x.png";
import { useContext, useRef, useState } from "react";
import { ModalContext } from "../../contexts/modalContext";
import { UserContext } from "../../contexts/userContext";
import { getTimeDifference } from "../../scripts/yourVideosScripts";
import { useWindowResize } from "../../contexts/resizeContext";
import YourVideosContainer from "../../components/your-videos-container/yourVideosContainer";

interface Videos {
  title: string;
  video_id: string;
  thumbnail: string;
  description: string;
  publishedAt: string;
}

const YourVideos: React.FC = () => {
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

  const { user, userVideos, createVideos, token } = useContext(UserContext);
  const { hideModal, setHideModal } = useContext(ModalContext);

  useWindowResize();

  const USER_ID = user.id;

  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnailValid, setThumbnailValid] = useState(true);
  const [titleValid, setTitleValid] = useState(true);
  const [descriptionValid, setDescriptionValid] = useState(true);
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const sendVideo = () => {
    const date = new Date();

    const isThumbnailValid = thumbnail.trim() !== "";
    const isTitleValid = title.trim() !== "";
    const isDescriptionValid = description.trim() !== "";

    setThumbnailValid(isThumbnailValid);
    setTitleValid(isTitleValid);
    setDescriptionValid(isDescriptionValid);

    if (!isThumbnailValid || !isTitleValid || !isDescriptionValid) {
      setThumbnailValid(!isThumbnailValid);
      setTitleValid(!isTitleValid);
      setDescriptionValid(!isDescriptionValid);

      if (!isThumbnailValid && thumbnailRef.current) {
        thumbnailRef.current.focus();
      } else if (!isTitleValid && titleRef.current) {
        titleRef.current.focus();
      } else if (!isDescriptionValid && descriptionRef.current) {
        descriptionRef.current.focus();
      }
    } else {
      createVideos(token, USER_ID, title, description, thumbnail, date);
      setHideModal(true);
      clearInputs();
    }
  };

  const clearInputs = () => {
    if (thumbnailRef.current) {
      thumbnailRef.current.value = "";
      thumbnailRef.current.focus();
      setThumbnail("");
    }
    if (titleRef.current) {
      titleRef.current.value = "";
      setTitle("");
    }
    if (descriptionRef.current) {
      descriptionRef.current.value = "";
      setDescription("");
    }
  };

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
                <label htmlFor="thumbnail">Thumbnail</label>
                <ThumbnailTextBox
                  data-cy="video-thumbnail-input"
                  id="thumbnail"
                  type="textbox"
                  onChange={(e: any) => setThumbnail(e.target.value)}
                  ref={thumbnailRef}
                  valid={thumbnailValid}
                  maxLength={200}
                  placeholder="Place your URL picture that shows what's in your video."
                />
                <MessageContainer valid={thumbnailValid}>
                  <span>Your video needs a thumbnail</span>
                </MessageContainer>
                <label htmlFor="title">Title</label>
                <TitleTextBox
                  data-cy="video-title-input"
                  id="title"
                  type="textbox"
                  onChange={(e: any) => setTitle(e.target.value)}
                  ref={titleRef}
                  valid={titleValid}
                  maxLength={100}
                  placeholder="Add a title that describes your video"
                />
                <MessageContainer valid={titleValid}>
                  <span>Your video needs a title</span>
                </MessageContainer>
                <label htmlFor="description">Description</label>
                <DescriptionTextBox
                  data-cy="video-description-input"
                  id="description"
                  type="textbox"
                  onChange={(e: any) => setDescription(e.target.value)}
                  ref={descriptionRef}
                  valid={descriptionValid}
                  maxLength={200}
                  placeholder="Tell viewers about your video"
                />
                <MessageContainer valid={descriptionValid}>
                  <span>Your video needs a description</span>
                </MessageContainer>
                <SaveButton data-cy="create-video" onClick={() => sendVideo()}>
                  SAVE
                </SaveButton>
                <ModalFooter>
                  <span>
                    By submitting your videos to YouTube, you acknowledge that
                    you agree to YouTube's <a>Terms of Service</a> and{" "}
                    <a>Community Guidelines</a>.
                  </span>
                  <span>
                    Please be sure not to violate others' copyright or privacy
                    rights. <a>Learn more</a>.
                  </span>
                </ModalFooter>
              </ModalContent>
            </ModalContainer>
          </Modal>
          <div data-cy="video-container">
            {userVideos.map((video: Videos) => (
              <YourVideosContainer
                title={video.title}
                thumbnail={video.thumbnail}
                description={video.description}
                publishedAt={getTimeDifference(video.publishedAt)}
                key={video.video_id}
              />
            ))}
          </div>
        </RoutesContainer>
      </MainContainer>
    </>
  );
};

export default YourVideos;
