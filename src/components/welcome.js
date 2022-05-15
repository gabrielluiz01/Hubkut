import React from "react";
import styled from "styled-components/macro";

// Images
import Stars from "../assets/stars.png";
import RepoIcon from "../assets/repos.png";
import Followers from "../assets/followers.png";
import Following from "../assets/book.png";

const WelcomeBox = styled.div`
  width: 618px;
  height: 189px;
  border-radius: 8px;
  background-color: #fff;
  padding: 20px 0 20px 30px;

  h1 {
    font-weight: normal;
  }
`;

const LuckyBox = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 20px 0;

  p {
    color: #999999;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  p {
    font-size: 12px;
    font-weight: 300;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;

    p {
      color: #2e7bb4;
      font-size: 14px;
      font-weight: normal;
    }

    img {
      margin-right: 10px;
    }
  }
`;

const Welcome = ({ userData, todaysLuck }) => {
  return (
    <WelcomeBox>
      <h1>Bem-vindo (a), {userData?.login}</h1>
      <LuckyBox>
        <p>
          <strong>Sorte de hoje</strong>:{todaysLuck}
        </p>
      </LuckyBox>
      <InfoBox>
        <div>
          <p>Repositórios</p>
          <span>
            <img src={RepoIcon} /> <p>{userData?.public_repos}</p>
          </span>
        </div>
        <div>
          <p>Favoritos</p>
          <span>
            <img src={Stars} /> <p>{userData?.public_repos}</p>
          </span>
        </div>
        <div>
          <p>Seguidores</p>
          <span>
            <img src={Followers} /> <p>{userData?.followers}</p>
          </span>
        </div>
        <div>
          <p>Seguindo</p>
          <span>
            <img src={Following} /> <p>{userData?.following}</p>
          </span>
        </div>
      </InfoBox>
    </WelcomeBox>
  );
};

export default Welcome;
