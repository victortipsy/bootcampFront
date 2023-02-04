import React from "react";
import styled from "styled-components";
import CategoriesBDProps from "../Props/CategoryBDProps";
import GadgetsProps from "../Props/GadgetsProps";

const Apple = () => {
  return (
    <Container>
      <Wrapper>
        <Catch>
          <h3>Apple Phones</h3>
        </Catch>
        <Hold>
          <GadgetsProps
            picture=""
            name="Something"
            present="$2,000"
            former="$5, 000"
          />
          <GadgetsProps
            picture=""
            name="Something"
            present="$9,000"
            former="$11, 000"
          />
          <GadgetsProps
            picture=""
            name="Something"
            present="$28,000"
            former="$55, 000"
          />
          <GadgetsProps
            picture=""
            name="Something"
            present="$20,000"
            former="$58, 000"
          />
          <GadgetsProps
            picture=""
            name="Something"
            present="$90,000"
            former="$50, 000"
          />
          <GadgetsProps
            picture=""
            name="Something"
            present="$290,000"
            former="$50, 000"
          />
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Apple;

const Container = styled.div`
  width: 100%;
  height: 350px;
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
`;
const Hold = styled.div`
  width: 97%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const Catch = styled.div`
  display: flex;
  width: 100%;
  padding-left: 35px;
`;
