import React, { useState } from "react";
import styled from "styled-components/macro";

import MenuIcon from "../assets/menu-mobile.png";
import CloseIcon from "../assets/close-menu.png";

import SidebarProfile from "../components/sidebarProfile";

const Container = styled.nav``;

const Menu = styled.img``;

const MenuMobile = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <Container>
      {isOpenMenu ? (
        <img src={CloseIcon} onClick={() => setIsOpenMenu(false)} />
      ) : (
        <Menu src={MenuIcon} onClick={() => setIsOpenMenu(true)} />
      )}
    </Container>
  );
};
export default MenuMobile;
