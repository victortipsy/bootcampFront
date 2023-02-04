import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import SingleHero from "./SingleHero";

const SingleProduct = () => {
  return (
    <Wrapper>
      <Header />
      <SingleHero />
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.div`
  background-color: aliceblue;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
