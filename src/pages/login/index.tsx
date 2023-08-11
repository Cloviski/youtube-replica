import {
  AccountContainer,
  ButtonIcon,
  CheckBoxContainer,
  EmailInput,
  EmailLoginContainer,
  FormContainer,
  GoogleContainer,
  GoogleLogo,
  InnerLoginContainer,
  MainLoginContainer,
  MessageContainer,
  NextButton,
  PasswordInput,
  SignUpButton,
  SpanContainer,
} from "./styles";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate, Link } from "react-router-dom";
import GoogleLogoIcon from "../../assets/google.png";
import Footer from "../../components/footer";
import WarningIcon from "../../assets/exclamation.png";

function Login() {
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
    } else if (password.trim() === "" || password.length < 8) {
      setValidPassword(false);
      if (passwordRef.current) {
        passwordRef.current.focus();
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
            <EmailInput
              valid={validEmail}
              type="email"
              ref={emailRef}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  userLogin();
                }
              }}
            />
            <MessageContainer valid={validEmail}>
              <ButtonIcon alt="" src={WarningIcon} />
              <span>Couldn't find your Google Account</span>
            </MessageContainer>
            <PasswordInput
              valid={validPassword}
              type={showPassword ? "text" : "password"}
              ref={passwordRef}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <Link to="..">
            <NextButton onClick={() => handleLogin(email, password)}>
              Next
            </NextButton>
          </Link>
        </AccountContainer>
      </InnerLoginContainer>
      <Footer />
    </MainLoginContainer>
  );
}

export default Login;

/*
    <div>login</div>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button onClick={() => handleLogin(email, password)}>Login</button>
*/
