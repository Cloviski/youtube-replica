import {
  Checkbox,
  Icon,
  ImageBanner,
  SpanContainer,
  SpanVideoContainer,
  TableContentContainer,
  TableVideoContainer,
  VisibilityContainer,
} from "./yourVideosContainerStyles";
import EyeIcon from "../../assets/view.png";

interface Props {
  title: string;
  thumbnail: string;
  description: string;
  publishedAt: string;
}

const YourVideosContainer: React.FC<Props> = (props) => (
  <TableContentContainer>
    <Checkbox type="checkbox" />
    <TableVideoContainer>
      <ImageBanner alt="thumbnail" src={props.thumbnail} />
      <SpanVideoContainer>
        <span>{props.title}</span>
        <span>{props.description}</span>
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
      <span>{props.publishedAt}</span>
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
);

export default YourVideosContainer;
