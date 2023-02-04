import React from "react";
import styled from "styled-components";
import CategoriesBDProps from "../Props/CategoryBDProps";

const CategoriesBD = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <CategoriesBDProps picture="" text="itel A11" />
          <CategoriesBDProps picture="" text="tecno Pop 4" />
          <CategoriesBDProps picture="" text="infinix hot  10T" />
          <CategoriesBDProps picture="" text="samsung galaxy s20" />
          <CategoriesBDProps picture="" text="samsung galaxy s20" />
          <CategoriesBDProps picture="" text="samsung galaxy s20" />
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default CategoriesBD;

const Container = styled.div`
  width: 100%;
  height: 200px;
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
  background-color: white;
`;
const Hold = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
