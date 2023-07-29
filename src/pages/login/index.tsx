import {
  AccountContainer,
  EmailLoginContainer,
  FormContainer,
  FormInput,
  GoogleContainer,
  GoogleLogo,
  InnerLoginContainer,
  MainLoginContainer,
  NextButton,
  SignUpButton,
  SpanContainer,
} from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate, Link } from "react-router-dom";
import GoogleLogoIcon from "../../assets/google.png";
import Footer from "../../components/footer";

function Login() {
  const { handleLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormContainer>
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
