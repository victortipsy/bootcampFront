import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { GlobalContext } from "../Global/Global";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  const registerUser = async (e: any) => {
    e.preventDefault();
    const userdata = await axios
      .post("http://localhost:6060/api/user/register", {
        name,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
      });
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <div>
            <Logo>Aikay</Logo>
          </div>
          <Comments>
            <h3>Create your account</h3>
            <div>
              <h4>Let's get started by creating your account.</h4>
              <h5>To keep your account safe, we need a strong password.</h5>
            </div>
          </Comments>
          <UserDetails onSubmit={registerUser}>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              type="text"
              placeholder="Name"
            />
            <input
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
            <input
              onChange={(e) => {
                setConfirmpassword(e.target.value);
              }}
              required
              type="password"
              placeholder="Confirm Password"
            />
            <button type="submit">Continue</button>
          </UserDetails>
          <Ending>
            Already have an account?{" "}
            <span>
              <NavLink to="login">Log in</NavLink>
            </span>
          </Ending>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SignUp;

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
