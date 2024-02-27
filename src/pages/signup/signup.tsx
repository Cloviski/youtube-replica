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
} from "./signupStyles";

import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect, useRef, useState } from "react";
import GoogleLogoIcon from "../../assets/google.png";
import Footer from "../../components/footer/footer";
import WarningIcon from "../../assets/exclamation.png";

const SignUp: React.FC = () => {
  const { handleCreateUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [UserValidName, setUserValidName] = useState(true);
  const [UserValidEmail, setUserValidEmail] = useState(true);
  const [UserEmptyEmail, setUserEmptyEmail] = useState(true);
  const [UserEmptyPassword, setUserEmptyPassword] = useState(true);
  const [formatEmailValid, setFormatEmailValid] = useState(true);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameRef.current !== null) {
      nameRef.current.focus();
    }
  }, []);

  const createUser = () => {
    const trimmedName = userName.trim();
    const trimmedEmail = userEmail.trim();
    const trimmedPassword = userPassword.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      setUserValidName(!!trimmedName);
      setUserEmptyEmail(!!trimmedEmail);
      setUserEmptyPassword(!!trimmedPassword);

      if (!trimmedName) {
        nameRef.current?.focus();
      } else if (!trimmedEmail) {
        setUserValidEmail(!!trimmedEmail);
      } else if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
        setFormatEmailValid(!/\S+@\S+\.\S+/.test(trimmedEmail));
        emailRef.current?.focus();
      } else if (!trimmedPassword) {
        setUserEmptyPassword(false);
        passwordRef.current?.focus();
      }
      return;
    }

    handleCreateUser(trimmedName, trimmedEmail, trimmedPassword);
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
              valid={UserEmptyEmail}
              type="text"
              placeholder="Name"
              value={userName}
              ref={nameRef}
              data-cy="name-input"
              onChange={(e: any) => setUserName(e.target.value)}
            />
            <MessageContainer data-cy="name-error" valid={UserValidName}>
              <ButtonIcon alt="" src={WarningIcon} />
              <span>Enter name</span>
            </MessageContainer>
            <FormInput
              valid={UserEmptyEmail}
              type="email"
              placeholder="Email address"
              value={userEmail}
              ref={emailRef}
              data-cy="email-input"
              onChange={(e: any) => setUserEmail(e.target.value)}
            />
            <MessageContainer data-cy="email-error" valid={UserEmptyEmail}>
              <ButtonIcon alt="" src={WarningIcon} />
              <span>Enter an email address</span>
            </MessageContainer>
            <MessageContainer data-cy="email-error" valid={UserValidEmail}>
              <ButtonIcon alt="" src={WarningIcon} />
              <span>
                {formatEmailValid
                  ? "Enter an email address"
                  : "Email format invalid"}
              </span>
            </MessageContainer>
            <FormInput
              valid={UserEmptyEmail}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={userPassword}
              ref={passwordRef}
              data-cy="password-input"
              onChange={(e: any) => setUserPassword(e.target.value)}
            />
            <MessageContainer
              data-cy="password-error"
              valid={UserEmptyPassword}
            >
              <ButtonIcon alt="" src={WarningIcon} />
              <span>Enter password</span>
            </MessageContainer>
            <CheckBoxContainer>
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                data-cy="show-password"
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
          <NextButton data-cy="create-user" onClick={() => createUser()}>
            Next
          </NextButton>
        </AccountContainer>
      </InnerLoginContainer>
      <Footer />
    </MainLoginContainer>
  );
};

export default SignUp;
