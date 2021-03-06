import React from "react";
import {
  Wrapper,
  FormWrapper,
  LoginText,
  Label,
  TextInput,
  SignInWrapper,
  TealButton,
  RememberOptionWrapper,
  RememberText,
  SocMedAuthBtn,
  SocMedImg,
  GoogleAuthBtn,
} from "./styled";
import GoogleImgSrc from "../../img/google.png";
import FacebookImgSrc from "../../img/facebook.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <LoginText>Login</LoginText>
        <Label for="email">Email</Label>
        <br></br>
        <TextInput
          name="email"
          id="email"
          type="email"
          placeholder="Tulis alamat email anda"
        ></TextInput>
        <Label for="password">Password</Label>
        <br></br>
        <TextInput
          name="password"
          id="password"
          type="password"
          placeholder="Tulis password anda"
        ></TextInput>
        <SignInWrapper>
          <RememberOptionWrapper>
            <input name="remember" id="remember" type="checkbox"></input>
            <RememberText>Remember me</RememberText>
          </RememberOptionWrapper>
          <Link to={`/home`} style={{ textDecoration: "none" }}>
            <TealButton>Sign In</TealButton>
          </Link>
        </SignInWrapper>
        <Link to={`/home`} style={{ textDecoration: "none" }}>
          <GoogleAuthBtn>
            <SocMedImg src={GoogleImgSrc} alt="google-icon"></SocMedImg>
            <span>Continue with Google</span>
            <span></span>
          </GoogleAuthBtn>
        </Link>
        <Link to={`/home`} style={{ textDecoration: "none" }}>
          <SocMedAuthBtn>
            <SocMedImg src={FacebookImgSrc} alt="facebook-icon"></SocMedImg>
            <span>Continue with Facebook</span>
            <span></span>
          </SocMedAuthBtn>
        </Link>
      </FormWrapper>
    </Wrapper>
  );
};

export default Login;
