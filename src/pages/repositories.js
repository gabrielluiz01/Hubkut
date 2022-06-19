import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

// Components
import Layout from "../components/layout";
import Header from "../components/header";
import SidebarProfile from "../components/sidebarProfile";

import { api } from "../services/api";

import Stars from "../assets/stars.png";
import RepoIcon from "../assets/repos.png";

const Container = styled.section`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  height: 545px;
  background-color: #fff;
  border-radius: 8px;
  overflow-y: scroll;
  padding: 20px;

  div {
    margin: 1px 0;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #fff;

    span {
      display: flex;
      align-items: center;
      flex-direction: row;
      img {
        margin-right: 5px;
      }
    }

    .description-box {
      display: flex;
      flex-direction: column;
      justify-content: start;
      border: none;
    }
  }
  .repo-name {
    font-weight: 600;
    color: #2e7bb4;
    font-size: 14px;
  }

  .description {
    font-size: 12px;
    color: #999999;
    margin-top: 5px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 79px;
    background-color: #6f92bb;
    border-radius: 5px;
    color: #fff;
    border: none;
    align-self: center;
    transition: 0.5s all;
    cursor: pointer;
    font-weight: 600;

    img {
      margin-right: 5px;
    }

    :hover {
      filter: brightness(90%);
    }
  }

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    margin: 15px 0 0 0;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

const ContentRepo = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #d9e6f6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const Repositories = () => {
  const [userData, setUserData] = useState([]);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    let data = localStorage.getItem("user");

    let formatedData = JSON.parse(data);

    setUserData(formatedData);
    getRepos();
  }, [repos]);

  const getRepos = async () => {
    try {
      const { data } = await api.get(`/users/${userData.login}/repos`);
      setRepos(data);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <Layout>
      <Header />
      <Container>
        <SidebarProfile data={userData} />
        <Content>
          <ContentRepo>
            {repos.map((item, index) => (
              <div key={index}>
                <div className="description-box">
                  <span>
                    <img src={RepoIcon} />
                    <p className="repo-name">{item?.full_name}</p>
                  </span>
                  <p className="description">{item?.description}</p>
                </div>
                <button>
                  <img src={Stars} />
                  <p>Star</p>
                </button>
              </div>
            ))}
          </ContentRepo>
        </Content>
      </Container>
    </Layout>
  );
};
export default Repositories;
