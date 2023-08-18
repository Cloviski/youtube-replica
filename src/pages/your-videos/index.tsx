import React from "react";
import { MainContainer } from "../../AppStyles";
import HeaderStudio from "../../components/header-studio";
import MenuStudio from "../../components/menu-studio";

function YourVideos() {
  return (
    <>
      <HeaderStudio />
      <MainContainer>
          <MenuStudio />
      </MainContainer>
    </>
  );
}

export default YourVideos;
