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

  p {
    color: #fff;
    margin-left: 5px;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px 0 20px;
`;

const Following = ({
  followingData,
  seeAllFollowing,
  userData,
  setSeeAllFollowing,
}) => {
  const ordenate = followingData.slice(0, 6);

  return (
    <FollowersContainer all={seeAllFollowing}>
      {followingData.length ? (
        <>
          <h3>
            Seguindo
            <strong className="number">({userData.following})</strong>
          </h3>
          <Box>
            {(seeAllFollowing ? followingData : ordenate).map((item, index) => (
              <UserBox key={index} image={item.avatar_url}>
                <p>{item.login}</p>
              </UserBox>
            ))}
          </Box>
          <strong onClick={() => setSeeAllFollowing(!seeAllFollowing)}>
            {seeAllFollowing ? "ver menos" : "ver mais"}
          </strong>
        </>
      ) : (
        <Loader />
      )}
    </FollowersContainer>
  );
};
export default Following;
