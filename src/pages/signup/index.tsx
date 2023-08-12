import {
  AccountContainer,
  ButtonIcon,
  CheckBoxContainer,
  EmailLoginContainer,
  FormContainer,
  FormInput,
  GoogleContainer,
  GoogleLogo,
  InnerLoginContainer,
  MainLoginContainer,
  MessageContainer,
  NextButton,
  SignUpButton,
} from "./styles";

import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect, useRef, useState } from "react";
import GoogleLogoIcon from "../../assets/google.png";
import Footer from "../../components/footer";
import WarningIcon from "../../assets/exclamation.png";

function SignUp() {
  const { handleCreateUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [UserNameValid, setUserValidName] = useState(true);
  const [UserEmailValid, setUserValidEmail] = useState(true);
  const [UserPasswordValid, setUserValidPassword] = useState(true);
  const [formatEmailValid, setFormatEmailValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameRef.current !== null) {
      nameRef.current.focus();
    }
  }, []);

  const createUser = () => {
    if (userName.trim() !== "") {
      setUserValidName(true);
    }
    if (userEmail.trim() !== "") {
      setUserValidEmail(true);
    }
    if (userPassword.trim() !== "") {
      setUserValidPassword(true);
    }
    if (
      userName.trim() === "" &&
      userEmail.trim() === "" &&
      userPassword.trim() === ""
    ) {
      setUserValidName(false);
      setUserValidEmail(false);
      setUserValidPassword(false);
      if (nameRef.current) {
        nameRef.current.focus();
      }
    } else if (userName.trim() === "") {
      setUserValidName(false);
      if (nameRef.current) {
        nameRef.current.focus();
      }
    } else if (userEmail.trim() === "") {
      setUserValidEmail(false);
      setFormatEmailValid(true);
      if (emailRef.current) {
        emailRef.current.focus();
      }
    } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setFormatEmailValid(false);
      setUserValidEmail(false);
      if (emailRef.current) {
        emailRef.current.focus();
      }
    } else if (userPassword.trim() === "") {
      setUserValidPassword(false);
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
    } else {
      handleCreateUser(userName, userEmail, userPassword);
    }
  };
  return (
    <MainLoginContainer>
      <InnerLoginContainer>
        <GoogleContainer>
          <GoogleLogo alt="Google logo" src={GoogleLogoIcon} />
        </GoogleContainer>
        <h1>Create a Google Account</h1>
        <span>Enter your email, name and password</span>
        <EmailLoginContainer>
          <FormContainer>
            <FormInput
              //Enter name
              type="text"
              placeholder="Name"
              value={userName}
              ref={nameRef}
              onChange={(e) => setUserName(e.target.value)}
            />
            <MessageContainer valid={UserNameValid}>
              <ButtonIcon alt="" src={WarningIcon} />
              <span>Enter name</span>
            </MessageContainer>
            <FormInput
              //Enter an email address
              //Enter a valid email
              type="email"
              placeholder="Email address"
              value={userEmail}
              ref={emailRef}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <MessageContainer valid={UserEmailValid}>
              <ButtonIcon alt="" src={WarningIcon} />
              <span>
                {formatEmailValid
                  ? "Enter an email address"
                  : "Email format invalid"}
              </span>
            </MessageContainer>
            <FormInput
              //Enter password
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={userPassword}
              ref={passwordRef}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <CheckBoxContainer>
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onClick={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="show-password">Show password</label>
            </CheckBoxContainer>
          </FormContainer>
        </EmailLoginContainer>
        <AccountContainer>
          <SignUpButton>
            <span>Create account</span>
          </SignUpButton>
          <NextButton onClick={() => createUser()}>Next</NextButton>
        </AccountContainer>
      </InnerLoginContainer>
      <Footer />
    </MainLoginContainer>
  );
}

export default SignUp;
