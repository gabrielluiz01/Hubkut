import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.png";
import SearchIcon from "../assets/search-icon.svg";
import MenuMobile from "./menuMobile";

const Container = styled.header`
  width: 100vw;
  background-color: #5c9ecf;
  padding: 20px 50px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    max-width: 100% !important;
    padding: 20px 0;
  }
`;

const Content = styled.div`
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 95% !important;
  }
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin-left: 2rem;
    gap: 40px;

    li {
      color: #fff;
      position: relative;
      cursor: pointer;
      transition: 0.2s all;

      :hover {
        font-weight: bold;
        text-decoration: underline;
      }

      :after {
        content: "";
        height: 20px;
        width: 1px;
        background: #5292c1;
        position: absolute;
        right: -15px;
        top: 0px;
      }
    }
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 2rem;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    transition: 0.2s all;

    :hover {
      text-decoration: underline;
    }
  }
`;

const InputBox = styled.span`
  min-width: 182px;
  min-height: 34px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5579a1;
  padding: 10px 0px 10px 10px;

  input {
    background: transparent;
    border: none;
    margin-left: 15px;
    color: #fff;

    ::-webkit-input-placeholder {
      color: #fff;
    }
  }

  img {
    cursor: pointer;
  }
`;

const Header = ({ data, isOpenMenu, setIsOpenMenu }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
    localStorage.clear();
  };

  const isDesktop = window.innerWidth >= 1024;

  return (
    <Container>
      <Content>
        {!isDesktop && (
          <img src={Logo} alt="logo" onClick={() => navigate("/home")} />
        )}
        {isDesktop ? (
          <Menu>
            <img src={Logo} alt="logo" onClick={() => navigate("/home")} />
            <ul>
              <li>Início</li>
              <li>Pull Requests</li>
              <li>Issues</li>
              <li>Marketplace</li>
              <li>Explore</li>
            </ul>
          </Menu>
        ) : (
          <MenuMobile
            isDesktop={isDesktop}
            data={data}
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
        )}

        {isDesktop && (
          <SearchBox>
            <p onClick={() => handleGoBack()}>Sair</p>
            <InputBox>
              <img src={SearchIcon} alt="icone de pesquisa" />
              <input
                type="text"
                placeholder="Pesquisar no Hubkut"
                onChange={() => {}}
              />
            </InputBox>
          </SearchBox>
        )}
      </Content>
    </Container>
  );
};

export default Header;
