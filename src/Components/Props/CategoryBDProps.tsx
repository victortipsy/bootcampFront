import React from "react";
import styled from "styled-components";

interface iProps {
  picture: any;
  text: string;
}

const CategoriesBDProps: React.FC<iProps> = ({ picture, text }) => {
  return (
    <Container>
      <Picture>
        <Image src={picture} />
      </Picture>
      <Text> {text} </Text>
    </Container>
  );
};

export default CategoriesBDProps;

const Container = styled.div`
  width: 130px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Picture = styled.div`
  background-color: #ffc79f;
  border-radius: 25px;
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
  text-align: center;
`;
