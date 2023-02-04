import React from "react";
import styled from "styled-components";
import pic2 from "../Images/hot.webp";

const SingleHero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Middle>
            <Picture>
              <img src={pic2} />
            </Picture>
            <Details>
              <First>
                <Specs>
                  <Makers>Whoever made it</Makers>
                  <Name>Whatever the name is</Name>
                  <Features>Whatever features it has</Features>
                </Specs>
              </First>
              <Second>
                <div>
                  <Present>$299, 557</Present>
                  <Former>$50, 009</Former>
                </div>
              </Second>
              <Third>
                <button>Add to wishlist</button>
              </Third>
            </Details>
          </Middle>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SingleHero;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 83%;
  height: 90%;
  display: flex;
`;
const Left = styled.div`
  height: 100%;
  width: 300px;
  border-radius: 5px;
  background-color: white;
  margin-left: 40px;
`;
const Middle = styled.div`
  height: 100%;
  width: 900px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding-right: 15px;
`;
const Picture = styled.div`
  width: 300px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
const First = styled.div`
  width: 580px;
  height: 120px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;
const Details = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;
const Specs = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Second = styled.div`
  width: 580px;
  height: 120px;
  padding-left: 20px;
  display: flex;
  align-items: center;
`;
const Third = styled.div`
  width: 580px;
  height: 120px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 20px;
    background-color: purple;
    color: white;
    font-weight: bold;
    transition: all 350ms;
    :hover {
      background-color: #580158;
    }
  }
`;
const Makers = styled.div``;
const Name = styled.div``;
const Features = styled.div``;
const Former = styled.div`
  text-decoration: line-through;
  font-weight: 300;
  font-size: 13px;
`;
const Present = styled.div`
  font-weight: bold;
  font-size: 15px;
`;
