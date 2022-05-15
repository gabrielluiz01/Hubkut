import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Images
import Logo from "../assets/logo.svg";
import Code from "../assets/code.svg";

// API
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
`;

const ContentBox = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Content = styled.div`
  width: calc(100% - 359px);
  height: 368px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin-bottom: 30px;
  }

  p {
    text-align: center;
    color: #333;
    font-size: 16px;
    margin-bottom: 10px;
  }

  b {
    font-size: 16px;
    color: #d81d99;
  }
`;

const Form = styled.form`
  width: 359px;
  height: 368px;
  background-color: #f1f9fe;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  img {
    width: 150px;
    height: 130px;
  }

  p {
    color: #333;
  }

  p:first-of-type {
    margin-top: 15px;
  }

  p {
    margin-top: 10px;
  }
  input {
    margin: 20px 0;
    height: 32px;
    width: 209px;
    border: 1px solid #c5c6ca;
    padding: 5px 10px;
    border-radius: 5px;

    ::-webkit-input-placeholder {
      color: #c5c6ca;
    }

    ${({ error }) =>
      error &&
      `
      border: 2px solid red;
      animation: shake .3s ease-in-out 0s 2;
    `}

    @keyframes shake {
      0% {
        transform: translateX(0rem);
      }
      25% {
        transform: translateX(-0.5rem);
      }
      75% {
        transform: translateX(0.5rem);
      }
      100% {
        transform: translateX(0rem);
      }
    }
  }

  button {
    width: 209px;
    height: 33px;
    background: #2e7bb4;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 0.7s all;

    :hover {
      filter: brightness(80%);
    }
  }
`;

const CopyrightBox = styled.div`
  height: 27px;
  background: #bbcde8;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 15px 0;

  p {
    font-size: 12px;
    margin-right: 25px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 15px;

    li {
      text-decoration: underline;
      font-size: 12px;
      color: #2e7bb4;
      position: relative;
      margin-left: 5px;
      cursor: pointer;
      transition: 0.7s all;

      :hover {
        filter: brightness(80%);
      }

      :before {
        content: "";
        background: #2e7bb4;
        height: 1px;
        width: 7px;
        position: absolute;
        left: -10px;
        top: 7px;
      }
    }
  }
`;

const Login = (props) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const LogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`users/${user}`);

      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/home");
    } catch (err) {
      console.log("error", err);

      setError(true);
    }
  };

  const handleUser = (e) => {
    setUser(e.target.value);
    setError(false);
  };

  return (
    <Container>
      <ContentBox>
        <Content>
          <img src={Logo} alt="logo" />
          <p>
            <b>Siga</b> amigos e outros devs do seu interesse usando o botão
            seguir
          </p>
          <p>
            <b>Conheça</b> novos devs e repositórios através da aba explorar
          </p>
          <p>
            <b>Compartilhe</b> ideias e soluções em um só lugar
          </p>
        </Content>
        <Form error={error}>
          <img src={Code} />
          <p>
            Acesse o <strong>hubkut</strong>
          </p>
          <p>com seu usuário do Github</p>
          <input
            type="text"
            placeholder="Digite seu usuário"
            onChange={(e) => handleUser(e)}
          />
          <button onClick={(e) => LogIn(e)}>Login</button>
        </Form>
      </ContentBox>
      <CopyrightBox>
        <p>© 2022 Hubkut</p>
        <nav>
          <ul>
            <li>Sobre o Hubkut</li>
            <li>Centro de segurança</li>
            <li>Privacidade </li>
            <li>Termos</li>
            <li>Contato</li>
          </ul>
        </nav>
      </CopyrightBox>
    </Container>
  );
};

export default Login;
