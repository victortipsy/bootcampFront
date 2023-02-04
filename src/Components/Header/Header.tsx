import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>Aikay</Logo>
          <Search>
            <SearchHold>
              <Icon>?</Icon>
              <input
                type="search"
                placeholder="Search gadgets, brands and categories"></input>
            </SearchHold>
            <button>search</button>
          </Search>
          <Icons>
            <AccountOptions>Account</AccountOptions>
            <WishList
              onClick={() => {
                navigate("/wish");
              }}>
              WishList
            </WishList>
          </Icons>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f0eeee;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  height: 100%;
  width: 50px;
  border-radius: 50%;
  background-color: #800080cb;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: cursive;
  font-size: 14px;
`;
const Search = styled.div`
  height: 100%;
  width: 380px;
  display: flex;
  button {
    width: 70px;
    height: 100%;
    color: white;
    background-color: purple;
    border: none;
    outline: none;
    border-radius: 3px;
  }
`;
const SearchHold = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 3px;
  display: flex;
  border: 1px solid grey;
  margin-right: 7px;
  input {
    border: none;
    outline: none;
    flex: 1;
    padding-right: 8px;
    ::placeholder {
      color: #8d8c8c;
    }
  }
`;
const Icon = styled.div`
  height: 100%;
  width: 35px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icons = styled.div`
  height: 100%;
  width: 130px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
`;
const AccountOptions = styled.div`
  height: 100%;
  cursor: pointer;
  transition: all 350ms;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #464646;
  :hover {
    color: #ad0886;
  }
`;
const WishList = styled.div`
  height: 100%;
  cursor: pointer;
  transition: all 350ms;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #464646;
  :hover {
    color: #ad0886;
  }
`;
