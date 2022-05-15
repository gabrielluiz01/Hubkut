import React from "react";
import styled from "styled-components";

const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100% !important;
    position: relative;
  }
`;
const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
export default Layout;
