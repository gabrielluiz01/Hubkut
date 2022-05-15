import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

// Components
import Header from "../components/header";
import Layout from "../components/layout";
import SidebarProfile from "../components/sidebarProfile";
import Followers from "../components/followers";
import Following from "../components/following";
import Welcome from "../components/welcome";
import WantToDo from "../components/wantToDo";
import LatestRepos from "../components/latestRepos";

import { phrases, wantToDo } from "../mocks";
import { api } from "../services/api";

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  margin: ${({ contentMargin }) => contentMargin};
`;

const Home = (props) => {
  const [userData, setUserData] = useState([]);
  const [todaysLuck, setTodaysLuck] = useState("");
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const [seeAllFollowers, setSeeAllFollowers] = useState(false);
  const [seeAllFollowing, setSeeAllFollowing] = useState(false);

  useEffect(() => {
    getRepos();
    getFollowers();
    getFollowing();
    const luck = phrases[Math.floor(Math.random() * phrases.length)];
    setTodaysLuck(luck);
  }, [userData]);

  useEffect(() => {
    let data = localStorage.getItem("user");

    let formatedData = JSON.parse(data);

    setUserData(formatedData);
  }, []);

  const getRepos = async () => {
    try {
      const { data } = await api.get(`/users/${userData?.login}/repos`);

      setRepos(data);
    } catch (err) {
      console.log("error", err);
    }
  };

  const getFollowers = async () => {
    try {
      const { data } = await api.get(
        `/users/${userData?.login}/followers?per_page=100`
      );

      setFollowers(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const getFollowing = async () => {
    try {
      const { data } = await api.get(
        `/users/${userData?.login}/following?per_page=100`
      );

      setFollowing(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Layout>
      <Header />
      <Container>
        <SidebarProfile data={userData} />
        <Content>
          <Welcome userData={userData} todaysLuck={todaysLuck} />
          <WantToDo wantToDo={wantToDo} />
          <LatestRepos repos={repos} />
        </Content>
        <Content contentMargin="0 0 0 15px">
          <Following
            followingData={following}
            seeAllFollowing={seeAllFollowing}
            userData={userData}
            setSeeAllFollowing={setSeeAllFollowing}
          />
          <Followers
            followersData={followers}
            seeAllFollowers={seeAllFollowers}
            userData={userData}
            setSeeAllFollowers={setSeeAllFollowers}
          />
        </Content>
      </Container>
    </Layout>
  );
};
export default Home;
