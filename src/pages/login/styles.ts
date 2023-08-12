import styled from "styled-components";

export const MainLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  line-height: 1.4286;
`;

export const InnerLoginContainer = styled.div`
  width: 450px;
  min-height: 500px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
  padding: 48px 40px 36px;
  box-sizing: border-box;

  h1 {
    padding-bottom: 0;
    padding-top: 16px;
    color: #202124;
    font-size: 24px;
    text-align: center;
    font-weight: 400;
    line-height: 1.3333;
    margin-bottom: 0;
    margin-top: 0;
    font-family: "Google Sans", sans-serif;
  }

  > span {
    display: block;
    text-align: center;
    padding-bottom: 1px;
    padding-top: 7px;
    color: #202124;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.1px;
    line-height: 1.5;
  }
`;

export const GoogleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const GoogleLogo = styled.img`
  height: 24px;
`;

export const EmailLoginContainer = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 30px;
`;

export const FormContainer = styled.form`
  display: grid;
  padding-top: 8px;
  row-gap: 8px;
`;

export const EmailInput = styled.input<{valid: boolean}>`
  width: 100%;
  border-radius: 4px;
  border: ${({valid}) => valid? '1px solid #dadce0' : '1px solid red'};
  //border: 1px solid #dadce0;
  color: #202124;
  font-size: 16px;
  height: 56px;
  margin: 1px 1px 0 1px;
  padding: 13px 15px;
  box-sizing: border-box;

  :focus {
    border-color: ${({valid}) => valid? '#1a75ff' : 'red'};
    border-width: 2px;
    outline: none;
  }
`;

export const FormInput = styled.input<{valid: boolean}>`
  width: 100%;
  border-radius: 4px;
  border: ${({valid}) => valid ? '1px solid #dadce0' : '1px solid red'};
  color: #202124;
  font-size: 16px;
  height: 56px;
  margin: 1px 1px 0 1px;
  padding: 13px 15px;
  box-sizing: border-box;

  &:focus {
    border-color: ${({valid}) => valid? '#1a75ff' : 'red'};
    border-width: 2px;
    outline: none;
  }
`;

export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 8px;

  label {
    font-size: 14px;
    margin-left: 16px;
  }
`;

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px 0 3px 0;

  > span {
    color: #1a73e8;
    font-weight: 600;
    letter-spacing: 0.25px;
    cursor: pointer;
    font-size: 14px;
  }

  .guest-span {
    color: #666666; //✞
    font-weight: 500;
    letter-spacing: 0;
  }
`;

export const MessageContainer = styled.div<{valid: boolean}>`
  display: ${({valid}) => (valid? "none" : "flex" ) };
  width: 100%;
  align-items: center;

  span {
    font-size: 12px;
    color: #F7053E
  }
`;

export const ButtonIcon = styled.img`
  width: 13px;
  height: 13px;
  margin: 0 10px 0 4px;
`;

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 26px;
  min-height: 48px;
  padding-bottom: 20px;
`;

export const SignUpButton = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  height: 36px;

  span {
    color: #1a73e8;
    font-family: "Google Sans", roboto, Arial, sans-serif;
    letter-spacing: 0.0107142857em;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const NextButton = styled.button`
  width: 79px;
  height: 36px;
  color: #fff;
  background-color: #1a73e8;
  border: none;
  font-family: "Google Sans", sans-serif;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #1a5eea;
  }
`;
