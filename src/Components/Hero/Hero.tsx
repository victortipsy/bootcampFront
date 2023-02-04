import React from "react";
import styled from "styled-components";
import { AiFillApple } from "react-icons/ai";
import pic1 from "../Images/intel.png";
import pic2 from "../Images/gad.png";
import pic3 from "../Images/spark.webp";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <List>
              <Icon>
                <AiFillApple />
              </Icon>
              <Item>iPhone</Item>
            </List>
            <List>
              <Icon>
                <AiFillApple />
              </Icon>
              <Item>Andoid</Item>
            </List>
            <List>
              <Icon>
                <AiFillApple />
              </Icon>
              <Item>Laptops</Item>
            </List>
            <List>
              <Icon>
                <AiFillApple />
              </Icon>
              <Item>Phones</Item>
            </List>
            <List>
              <Icon>
                <AiFillApple />
              </Icon>
              <Item>headPhones</Item>
            </List>
            <List>
              <Icon>
                <AiFillApple />
              </Icon>
              <Item>Sign Up</Item>
            </List>
            <List>
              <Icon>
                <AiFillApple />
              </Icon>
              <Item>Log In</Item>
            </List>
          </Left>
          <Middle>
            <img src={pic2} />
          </Middle>
          <Right>
            <Ad>
              <img src={pic1} />
            </Ad>
            <Ad>
              <img src={pic1} />
            </Ad>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

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
  justify-content: space-between;
`;
const Left = styled.div`
  height: calc(100% - 30px);
  width: 200px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #f0eeee;
`;
const Middle = styled.div`
  height: 100%;
  width: 600px;
  border-radius: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    object-position: center;
  }
`;
const Right = styled.div`
  height: 100%;
  width: 200px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Ad = styled.div`
  height: 172px;
  width: 200px;
  border-radius: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    object-position: center;
  }
`;
const List = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: #80008021;
  }
`;
const Icon = styled.div`
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
