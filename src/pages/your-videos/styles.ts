import styled from "styled-components";

export const H1Title = styled.h1`
  font-size: 22px;
  padding: 12px 0 0 32px;
`;

export const NavContainer = styled.nav`
  position: sticky;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-start;

  span {
    color: #666;
    font-size: 14px;
    margin: 18px 16px 0 34px;
    padding-bottom: 15px;
    font-weight: 600;
  }
`;

export const FilterContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  span {
    color: #666;
  }
`;

export const Icon = styled.img`
  max-width: 16px;
  padding: 10px;
  margin: 4px 24px 4px 20px;
`;

export const Modal = styled.div<{ hideModal?: boolean }>`
  visibility: ${({ hideModal }) => (hideModal ? "hidden" : "visible")};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.55);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 50vw;
  height: 90vh;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 24px;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  h3 {
    color: #212121;
  }

  & ${Icon} {
    margin: 0;
    padding: 8;

    :last-of-type {
      cursor: pointer;
    }
  }
`;

export const TitleTextBox = styled.input`
  height: 45px;
  border-radius: 5px;
  border-top: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 15px;
  padding: 0 11px 11px 11px;

  :focus {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const ModalFooter = styled.footer`

`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TableContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 83px;
  font-size: 13px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 20px;
  box-sizing: border-box;
`;

export const TableVideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 382px;
  height: 100%;
  padding-left: 26px;
  flex: 3 0 284px;
`;

export const SpanVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px 0 0 16px;

  span {
    :nth-of-type(2) {
      font-size: 12px;
      color: #888;
    }
  }
`;

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  height: 100%;
  box-sizing: border-box;
  white-space: nowrap;

  :nth-of-type(3) {
    padding: 16px 12px 0 12px;
    flex: 1 0 100px;
  }

  :nth-of-type(4) {
    padding: 16px 12px 0 12px;
    flex: 0 0 100px;
  }

  :nth-of-type(5) {
    min-width: 60px;
    padding: 16px 12px 0 12px;
    flex: 1 0 60px;
    text-align: end;
  }

  :nth-of-type(6) {
    min-width: 60px;
    padding: 16px 12px 0 12px;
    flex: 1 0 60px;
    text-align: end;
  }

  :nth-of-type(7) {
    padding: 16px 24px 0 12px;
    text-align: end;
    flex: 1 0 100px;
  }

  span {
    :nth-of-type(2) {
      font-size: 12px;
      color: #888;
    }
  }
`;

export const VisibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100px;
  height: 100%;
  padding: 16px 8px 0 24px;
  flex: 1 0 100px;
  box-sizing: border-box;

  span {
    padding-left: 8px;
  }

  & ${Icon} {
    height: 18px;
    padding: 0;
    margin: 0;
  }
`;

export const ImageBanner = styled.img`
  height: 68px;
  padding: 7px 0;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 47px;
  font-size: 12px;
  color: #777;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    flex: 1 0 100px;

    :first-of-type {
      min-width: 382px;
      padding-left: 26px;
      flex: 3 0 382px;
    }

    :nth-of-type(2) {
      min-width: 100px;
      justify-content: flex-start;
      padding: 0 8px 0 24px;
    }

    :nth-of-type(3) {
      min-width: 100px;
      justify-content: flex-start;
      padding: 0 12px;
    }

    :nth-of-type(4) {
      min-width: 100px;
      justify-content: flex-start;
      padding: 0 12px;
      flex: 0 0 100px;
    }

    :nth-of-type(5) {
      min-width: 60px;
      justify-content: flex-end;
      padding: 0 12px;
      flex: 1 0 60px;
    }

    :nth-of-type(6) {
      min-width: 60px;
      justify-content: flex-end;
      padding: 0 12px;
      flex: 1 0 60px;
    }

    :nth-of-type(7) {
      min-width: 100px;
      justify-content: flex-end;
      padding: 0 24px 0 12px;
    }
  }
`;

export const Checkbox = styled.input`
  margin-left: 30px;
`;
