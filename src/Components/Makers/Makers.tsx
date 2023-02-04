import React from "react";
import styled from "styled-components";
import CategoriesBDProps from "../Props/CategoryBDProps";
import GadgetsProps from "../Props/GadgetsProps";
import MakerProps from "../Props/MakerProps";

const Makers = () => {
  return (
    <Container>
      <Wrapper>
        <Catch>
          <h3>Brands</h3>
        </Catch>
        <Hold>
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
          <MakerProps picture="" text="bvbvbvbvb" />
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Makers;

const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 83%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 6px;
`;
const Hold = styled.div`
  width: 97%;
  height: 85%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
`;
const Catch = styled.div`
  display: flex;
  align-items: center;
  width: 97%;
  height: 50px;
  padding-left: 35px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: purple;
  color: white;
`;
