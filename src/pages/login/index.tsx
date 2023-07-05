import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
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
    Spancing,
} from "./styles";

import GoogleLogoIcon from "../../assets/google.png"
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";


function Login() {
    const { handleLogin } = useContext(UserContext)
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <MainLoginContainer>
            <Spancing />
            <InnerLoginContainer>
                <GoogleContainer>
                    <GoogleLogo src={GoogleLogoIcon} />
                </GoogleContainer>
                <h1>Sign in</h1>
                <span>to continue to YouTube</span>
                <EmailLoginContainer>
                    <FormContainer>
                        <FormInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FormInput type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormContainer>
                </EmailLoginContainer>
                <SpanContainer>
                    <span className="guest-span">Not your computer? Use Guest mode to sign in privately.</span>
                    <span>Learn more</span>
                </SpanContainer>
                <AccountContainer>
                    <SignUpButton>
                        <span onClick={() => navigate('/sign-up')}>Create account</span>
                    </SignUpButton>
                    <Link to='..'>
                        <NextButton onClick={() => handleLogin(email, password)}>Next</NextButton>
                    </Link>
                </AccountContainer>
            </InnerLoginContainer>
            <Footer />
        </MainLoginContainer>
    )
}

export default Login;

/*
    <div>login</div>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button onClick={() => handleLogin(email, password)}>Login</button>
*/