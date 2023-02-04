import React from "react";
import styled from "styled-components";

interface iProps {
  picture: any;
  name: any;
  present: string;
  former: string;
}

const GadgetsProps: React.FC<iProps> = ({ picture, name, present, former }) => {
  return (
    <Container>
      <Picture>
        <Image src={picture} />
      </Picture>
      <Text>
        <Name> {name} </Name>
        <Present> {present} </Present>
        <Former> {former} </Former>
      </Text>
    </Container>
  );
};

export default GadgetsProps;

const Container = styled.div`
  width: 130px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Picture = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 65%;
  height: 65%;
  object-fit: cover;
  object-position: center;
`;
const Text = styled.div`
  font-size: 14px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
`;
const Name = styled.div``;
const Former = styled.div`
  text-decoration: line-through;
  font-weight: 300;
  font-size: 13px;
`;
const Present = styled.div`
  font-weight: bold;
  font-size: 15px;
`;
