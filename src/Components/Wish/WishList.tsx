import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import WishHero from "./WishHero";

const WishList = () => {
  return (
    <Wrapper>
      <Header />
      <WishHero />
    </Wrapper>
  );
};

export default WishList;

const Wrapper = styled.div`
  background-color: aliceblue;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
