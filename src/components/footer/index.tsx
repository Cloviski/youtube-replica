import {
  ButtonIcon,
  FooterContainer,
  LanguageContainer,
  TermsContainer,
} from "./styles";
import DownArrow from "../../assets/down-filled-triangular-arrow.png";

function Footer() {
  return (
    <FooterContainer>
      <LanguageContainer>
        <span>English (United States)</span>
        <ButtonIcon alt="" src={DownArrow} />
      </LanguageContainer>
      <TermsContainer>
        <span>Help</span>
        <span>Privacy</span>
        <span>Terms</span>
      </TermsContainer>
    </FooterContainer>
  );
}

export default Footer;
