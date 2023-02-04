import React from "react";
import styled from "styled-components";

interface iProps {
  picture: any;
  text: string;
}

const MakerProps: React.FC<iProps> = ({ picture, text }) => {
  return (
    <Container>
      <Picture>
        <Image src={picture} />
        <Text> {text} </Text>
      </Picture>
    </Container>
  );
};

export default MakerProps;

const Container = styled.div``;
const Picture = styled.div`
  background-color: #ffc79f;
  border-radius: 6px;
  width: 160px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
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
  text-align: center;
  position: absolute;
  color: white;
`;
