import {
  AccountContainer,
  ButtonIcon,
  CheckBoxContainer,
  EmailLoginContainer,
  FormContainer,
  GoogleContainer,
  GoogleLogo,
  InnerLoginContainer,
  MainLoginContainer,
  MessageContainer,
  NextButton,
  FormInput,
  SignUpButton,
  SpanContainer,
} from "./loginStyles";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import GoogleLogoIcon from "../../assets/google.png";
import Footer from "../../components/footer/footer";
import WarningIcon from "../../assets/exclamation.png";

const Login = () => {
  const { handleLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validEmailFormat, setValidEmailFormat] = useState(true);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailRef.current !== null) {
      emailRef.current.focus();
    }
  }, []);

  const userLogin = () => {
    if (email.trim() !== "") {
      setValidEmail(true);
    }
    if (password.trim() !== "") {
      setValidPassword(true);
    }
    if (email.trim() === "" && password.trim() === "") {
      setValidEmail(false);
      setValidPassword(false);
      if (emailRef.current) {
        emailRef.current.focus();
      }
    } else if (email.trim() === "") {
      setValidEmail(false);
      if (emailRef.current) {
        emailRef.current.focus();
      }
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setValidEmailFormat(false);
      setValidEmail(false);
      if (emailRef.current) {
        emailRef.current.focus();
      }
    } else {
      handleLogin(email, password);
    }
  };

  return (
    <MainLoginContainer>
      <InnerLoginContainer>
        <GoogleContainer>
          <GoogleLogo src={GoogleLogoIcon} />
        </GoogleContainer>
        <h1>Sign in</h1>
        <span>to continue to YouTube</span>
        <EmailLoginContainer>
          <FormContainer>
            <FormInput
              valid={validEmail}
              type="email"
              ref={emailRef}
              placeholder="Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              onKeyDown={(e: any) => {
                if (e.key === "Enter") {
                  userLogin();
                }
              }}
            />
            <MessageContainer valid={validEmail}>
              <ButtonIcon alt="" src={WarningIcon} />
              <span>Couldn't find your Google Account</span>
            </MessageContainer>
            <FormInput
              valid={validPassword}
              type={showPassword ? "text" : "password"}
              ref={passwordRef}
              placeholder="Enter your password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              onKeyDown={(e: any) => {
                if (e.key === "Enter") {
                  userLogin();
                }
              }}
            />
          </FormContainer>
          <CheckBoxContainer>
            <input
              type="checkbox"
              id="show-password"
              checked={showPassword}
              onClick={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="show-password">Show password</label>
          </CheckBoxContainer>
        </EmailLoginContainer>
        <SpanContainer>
          <span className="guest-span">
            Not your computer? Use Guest mode to sign in privately.
          </span>
          <span>Learn more</span>
        </SpanContainer>
        <AccountContainer>
          <SignUpButton>
            <span onClick={() => navigate("/sign-up")}>Create account</span>
          </SignUpButton>
          <NextButton onClick={() => userLogin()}>Next</NextButton>
        </AccountContainer>
      </InnerLoginContainer>
      <Footer />
    </MainLoginContainer>
  );
}

export default Login;
