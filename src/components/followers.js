import React from "react";
import styled from "styled-components/macro";

import Loader from "./loader";

const FollowersContainer = styled.div`
  width: 312px;
  height: ${({ all }) => (all ? "auto" : "347px")};
  background: #fff;
  border-radius: 8px;
  margin-bottom: 30px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.7s all;

  @media (max-width: 768px) {
    width: 95%;
  }

  strong {
    color: #2e7bb4;
    cursor: pointer;
  }

  .number {
    color: #2e7bb4;
  }
`;

const UserBox = styled.div`
  width: 84px;
  height: 102px;
  border-radius: 5px;
  display: flex;
  align-items: flex-end;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  span {
    width: 100%;
    background-image: linear-gradient(to bottom, #00000010, #000);
    overflow: hidden;
  }

  p {
    color: #fff;
    margin-left: 5px;
    margin-bottom: 10px;
    font-size: 14px;
    width: 80%;
  }
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px 0 20px;
`;

const Followers = ({
  followersData,
  seeAllFollowers,
  userData,
  setSeeAllFollowers,
  isDesktop,
}) => {
  const ordenate = followersData.slice(0, 6);

  return (
    <FollowersContainer all={seeAllFollowers}>
      {followersData.length ? (
        <>
          <h3>
            Seguidores{" "}
            <strong className="number">({userData.followers})</strong>
          </h3>
          <Box>
            {(seeAllFollowers ? followersData : ordenate).map((item, index) => (
              <UserBox key={index} image={item.avatar_url}>
                <span>
                  <p>{item.login}</p>
                </span>
              </UserBox>
            ))}
          </Box>
          <strong onClick={() => setSeeAllFollowers(!seeAllFollowers)}>
            {seeAllFollowers ? "ver menos" : "ver mais"}
          </strong>
        </>
      ) : (
        <Loader />
      )}
    </FollowersContainer>
  );
};

export default Followers;
