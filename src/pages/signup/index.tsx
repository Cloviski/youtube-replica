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
    Spancing,
} from "./styles";

import GoogleLogoIcon from "../../assets/google.png"
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";


function SignUp() {
    const createUser = useContext(UserContext)
    const navigate = useNavigate();

    return (
        <MainLoginContainer>
            <Spancing />
            <InnerLoginContainer>
                <GoogleContainer>
                    <GoogleLogo src={GoogleLogoIcon} />
                </GoogleContainer>
                <h1>Create a Google Account</h1>
                <span>Enter your email, name and password</span>
                <EmailLoginContainer>
                    <FormContainer>
                        <FormInput type="text" placeholder="Name" />
                        <FormInput type="email" placeholder="Email address" />
                        <FormInput type="password" placeholder="Password" />
                    </FormContainer>
                </EmailLoginContainer>
                <AccountContainer>
                    <SignUpButton>
                        <span onClick={() => navigate('/sign-up')}>Create account</span>
                    </SignUpButton>
                    <NextButton>Next</NextButton>
                </AccountContainer>
            </InnerLoginContainer>
            <Footer />
        </MainLoginContainer>
    )
}

export default SignUp;
