import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogIn = () => {
  const navigate = useNavigate();
  const Submit = () => {
    navigate("/home");
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <div>
            <Logo>Aikay</Logo>
          </div>
          <Comments>
            <h3>Log In</h3>
            <div>
              <h4>Log in to your account.</h4>
              <h5>Enter the details you used to create your account.</h5>
            </div>
          </Comments>
          <UserDetails onSubmit={Submit}>
            <input required type="email" placeholder="Email" />
            <input required type="password" placeholder="Password" />
            <button type="submit">Continue</button>
          </UserDetails>
          <Ending>
            Don't have an account?{" "}
            <span>
              <NavLink to="/">Create one</NavLink>
            </span>
          </Ending>
        </Wrapper>
      </Container>
    </div>
  );
};

export default LogIn;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 80vh;
  width: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 430px) {
    width: 300px;
  }
  @media screen and (max-width: 340px) {
    width: 240px;
  }
  @media screen and (max-width: 285px) {
    width: 200px;
  }
  @media screen and (max-width: 230px) {
    width: 150px;
  }
`;
const Logo = styled.div`
  height: 38px;
  width: 79px;
  border-radius: 50%;
  background-color: #800080cb;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: cursive;
  font-size: 14px;
`;
const Par = styled.div``;
const Comments = styled.div`
  width: 100%;
  text-align: center;
  h4 {
    font-weight: 450;
    font-size: 15px;
    color: #3a3939;
    line-height: 5px;
    @media screen and (max-width: 430px) {
      line-height: 20px;
    }
  }
  h5 {
    font-weight: 450;
    font-size: 15px;
    color: #3a3939;
    line-height: 5px;
    @media screen and (max-width: 430px) {
      display: none;
    }
  }
  div {
    height: 15px;
  }
`;
const UserDetails = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  input {
    width: 100%;
    height: 22px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #9f9e9e;
    outline: none;
    margin-top: 20px;
    ::placeholder {
      color: #9f9e9e;
    }
  }
  button {
    width: 105%;
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
const Ending = styled.div`
  margin-top: 10px;
  font-weight: 450;
  font-size: 15px;
  color: #3a3939;
  text-align: center;
`;
