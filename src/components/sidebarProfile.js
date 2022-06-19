import React from "react";
import styled from "styled-components/macro";

// Images
import CompanyIcon from "../assets/building.png";
import Email from "../assets/email.png";
import Twitter from "../assets/twitter.png";
import LocationIcon from "../assets/pin.png";
import UrlIcon from "../assets/url.png";

const Container = styled.div`
  width: 300px;
  min-height: 545px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 30px;
  padding: 10px;
  margin-right: 20px;

  figure {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;

    border-radius: 0;
  }
`;

const ImageProfile = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

const Name = styled.p`
  color: #2e7bb4;
  font-size: 20px;
  font-weight: bold;
`;

const Bio = styled.p`
  font-size: 15px;
  color: #999999;
  margin-top: 5px;
`;

const Separator = styled.div`
  width: 100%;
  border-top: 1px solid #efebeb;
  border-bottom: 1px solid #efebeb;
  margin: 10px 0;
  padding: 12px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  :first-of-type {
    border-bottom: none;
  }

  span {
    display: flex;
    align-items: center;
    margin: 10px 0;
    overflow: hidden;

    img {
      margin-right: 15px;
    }

    p {
      font-size: 13px;
      color: #2e7bb4;
    }
  }
`;

const SidebarProfile = ({ data, isOpenMenu, isDesktop }) => {
  return (
      <Container>
        <figure>
          <ImageProfile src={data?.avatar_url} />
        </figure>
        <Separator>
          <Name>{data?.name}</Name>
          <Bio>{data?.bio}Front-end Developer</Bio>
        </Separator>
        <Separator>
          <span>
            <img src={CompanyIcon} />
            <p>{data?.company}</p>
          </span>
          <span>
            <img src={LocationIcon} />
            <p>{data?.location}</p>
          </span>
          <span>
            <img src={Email} />
            <p>{data?.email}</p>
          </span>
          <span>
            <img src={UrlIcon} />
            <p>{data?.blog}</p>
          </span>
          <span>
            <img src={Twitter} />
            <p>{data?.twitter_username}</p>
          </span>
        </Separator>
      </Container>
    )
};

export default SidebarProfile;
