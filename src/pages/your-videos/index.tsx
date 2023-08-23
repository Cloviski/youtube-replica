import React from "react";
import { MainContainer, RoutesContainer } from "../../AppStyles";
import HeaderStudio from "../../components/header-studio";
import MenuStudio from "../../components/menu-studio";
import {
  FilterContainer,
  H1Title,
  Icon,
  NavContainer,
  TableHeader,
} from "./styles";
import FilterIcon from "../../assets/filter.png";

const firstItems = [
  { label: "Videos" },
  { label: "Live" },
  { label: "Playlists" },
  { label: "Podcasts" },
  { label: "Promotions" },
];

function YourVideos() {
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
            <input type="checkbox" />
            <tr>
              <th>Video</th>
              <th>Visibility</th>
              <th>Restrictions</th>
              <th>Date</th>
              <th>Views</th>
              <th>Comments</th>
              <th>Likes (vs. dislikes)</th>
            </tr>
          </TableHeader>
        </RoutesContainer>
      </MainContainer>
    </>
  );
}

export default YourVideos;
