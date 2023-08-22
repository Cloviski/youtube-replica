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
