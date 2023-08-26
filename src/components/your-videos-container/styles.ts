import styled from "styled-components";

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

export const Icon = styled.img`
  max-width: 16px;
  padding: 10px;
  margin: 4px 24px 4px 20px;
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

export const Checkbox = styled.input`
  margin-left: 30px;
`;

