import React from "react";
import styled from "styled-components";

import Header from "../components/header";

const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
export default Layout;
