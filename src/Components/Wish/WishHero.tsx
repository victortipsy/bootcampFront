import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WishHero = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Picture />
        <Content>
          <h3>Your wishlist is empty!</h3>
          <p>Browse categories and discover best deals!</p>
        </Content>
        <button
          onClick={() => {
            navigate("/home");
          }}>
          START SHOPPING
        </button>
      </Wrapper>
    </Container>
  );
};

export default WishHero;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 83%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  button {
    width: 160px;
    height: 30px;
    color: white;
    background-color: purple;
    border: none;
    outline: none;
    font-size: 13px;
    font-weight: bold;
    border-radius: 3px;
  }
`;
const Picture = styled.div`
  height: 90px;
  width: 90px;
  background-color: #dddada;
  border-radius: 50%;
`;
const Content = styled.div`
  text-align: center;
  h3 {
    font-weight: 500;
    font-size: 15px;
  }
`;
