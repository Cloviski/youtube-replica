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

  :last-of-type {
    height: 18px;
    padding: 0;
    margin: 0;
  }
`;

export const TableContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 83px;
  font-size: 13px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 20px;
`;

export const TableVideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 382px;
  padding-left: 26px;
  flex: 3 0 382px;
`;

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 0 0 16px;

  span {
    :last-child {
      font-size: 12px;
      color: #888;
    }
  }
`;

export const VisibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100px;
  padding: 0 8px 0 24px;
  flex: 1 0 100px;
`;

export const ImageBanner = styled.img`
  height: 68px;
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
