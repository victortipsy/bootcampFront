import React from "react";
import styled from "styled-components";
import Android from "../Android/Android";
import Apple from "../Apple/Apple";
import CategoriesBD from "../CategoriesBD/CategoriesBD";
import FlashDrives from "../FlashDrives/FlashDrives";
import Gadgets from "../Gadgets/Gadgets";
import Header from "../Header/Header";
import Headphones from "../HeadPhones/HeadPhones";
import Hero from "../Hero/Hero";
import Laptops from "../Laptops/Laptops";
import Makers from "../Makers/Makers";

const HomePage = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <CategoriesBD />
      <Gadgets />
      <Laptops />
      <FlashDrives />
      <Headphones />
      <Makers />
      <Android />
      <Apple />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  background-color: aliceblue;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
