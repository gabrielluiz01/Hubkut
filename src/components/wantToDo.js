import React from "react";
import styled from "styled-components/macro";

const WantToDoBox = styled.div`
  width: 616px;
  height: 128px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 20px 2px 20px 30px;
  margin-top: 30px;

  h2 {
    font-weight: 500;
    font-size: 20px;
  }
`;

const ScrollBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 15px;
  margin-top: 20px;

  span {
    height: 32px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    /* background: #6f92bb; selecionadio */
    background: #d9e6f6;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    transition: 0.6s all;
    margin-bottom: 5px;

    :hover {
      background: #6f92bb;
      p {
        color: #fff;
      }
    }

    p {
      /* color: #fff; selecionado*/
      color: #2e7bb4;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 2px;
    height: 4px;
    margin: 15px 0 0 0;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

const WantToDo = ({ wantToDo }) => {
  return (
    <WantToDoBox>
      <h2>O que você deseja fazer?</h2>
      <ScrollBox>
        {wantToDo.map((item, index) => (
          <span key={index}>
            <p>{item}</p>
          </span>
        ))}
      </ScrollBox>
    </WantToDoBox>
  );
};
export default WantToDo;
