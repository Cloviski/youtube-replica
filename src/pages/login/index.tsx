import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { 
    AccountContainer,
    ButtonIcon,
    EmailInput, 
    EmailLoginContainer, 
    FooterContainer, 
    FormContainer, 
    GoogleContainer, 
    GoogleLogo, 
    InnerLoginContainer, 
    LanguageContainer, 
    MainLoginContainer, 
    NextButton, 
    SignUpButton, 
    SpanContainer,
    Spancing,
    TermsContainer, 
} from "./styles";
import GoogleLogoIcon from "../../assets/google.png"
import DownArrow from "../../assets/down-filled-triangular-arrow.png"


function Login() {
    const { handleLogin } = useContext(UserContext)

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
                        <EmailInput placeholder="Email or phone"/>
                    </FormContainer>
                    <SpanContainer>
                        <span>Forgot email?</span>
                    </SpanContainer>
                </EmailLoginContainer>
                <SpanContainer>
                    <span className="guest-span">Not your computer? Use Guest mode to sign in privately.</span>
                    <span>Learn more</span>
                </SpanContainer>
                <AccountContainer>
                    <SignUpButton>
                        <span>Create account</span>
                    </SignUpButton>
                    <NextButton>Next</NextButton>
                </AccountContainer>
            </InnerLoginContainer>
            <FooterContainer>
                <LanguageContainer>
                    <span>English (United States)</span>
                    <ButtonIcon alt="" src={DownArrow} />
                </LanguageContainer>
                <TermsContainer>
                    <span>Help</span>
                    <span>Privacy</span>
                    <span>Terms</span>
                </TermsContainer>
            </FooterContainer>
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