import React from "react";
import { MainContainer, RoutesContainer } from "../../AppStyles";
import HeaderStudio from "../../components/header-studio";
import MenuStudio from "../../components/menu-studio";
import { FilterContainer, H1Title, Icon, NavContainer } from "./styles";
import FilterIcon from "../../assets/filter.png"

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
        </RoutesContainer>
      </MainContainer>
    </>
  );
}

export default YourVideos;
