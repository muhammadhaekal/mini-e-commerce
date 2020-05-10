import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  width: 100vw;
  padding-left: 15px;
  padding-right: 15px;
`;

export const LoginText = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #36454f;
  text-align: center;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 11px;
  font-weight: 700;
  color: #36454f;
`;

export const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid rgb(204, 204, 204);
  font-size: 14px;
  color: #36454f;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgb(214, 214, 214);
  }
  margin-bottom: 20px;
`;

export const SignInWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

export const TealButton = styled.div`
  background-color: #70cbcf;
  padding: 8px 16px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
`;

export const CheckboxWrapper = styled.div``;

export const RememberOptionWrapper = styled.div`
  display: flex;
`;

export const RememberText = styled.div`
  font-size: 12px;
  color: #a7a7a7;
  margin-left: 4px;
`;

export const SocMedAuthBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgb(167, 167, 167);
  border-radius: 4px;
  padding: 8px 28px;
  color: #343a40;
  font-weight: 700;
  font-size: 16px;
`;

export const SocMedImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const GoogleAuthBtn = styled(SocMedAuthBtn)`
  margin-bottom: 12px;
`;
