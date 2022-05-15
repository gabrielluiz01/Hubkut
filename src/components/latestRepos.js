import React from "react";
import styled from "styled-components/macro";

import Stars from "../assets/stars.png";
import RepoIcon from "../assets/repos.png";

import Loader from "./loader";

const RepoBox = styled.div`
  width: 616px;
  min-height: 323px;
  border-radius: 8px;
  padding: 20px 30px 20px 30px;
  background-color: #fff;
  margin: 30px 0;

  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const ContentRepo = styled.section`
  width: 100%;
  background-color: #d9e6f6;
  min-height: 246px;
  border-radius: 5px;

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
`;

const LatestRepos = ({ repos }) => {
  let ordenateRepos = repos.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  ordenateRepos = ordenateRepos.slice(0, 3);
  return (
    <RepoBox>
      {repos.length ? (
        <>
          <h2>Meus ùltimos repositórios</h2>
          <ContentRepo>
            {ordenateRepos.map((item, index) => (
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
        </>
      ) : (
        <Loader />
      )}
    </RepoBox>
  );
};
export default LatestRepos;
