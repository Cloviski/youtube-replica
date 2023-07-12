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
import { useContext, useState } from "react";
import { Link } from "react-router-dom";


function SignUp() {
    const { createUser } = useContext(UserContext)

    const navigate = useNavigate();
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                        <FormInput type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <FormInput type="email" placeholder="Email address"  value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FormInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormContainer>
                </EmailLoginContainer>
                <AccountContainer>
                    <SignUpButton>
                        <span onClick={() => navigate('/sign-up')}>Create account</span>
                    </SignUpButton>
                    <Link to='..'>
                        <NextButton onClick={() => createUser(name, email, password)}>Next</NextButton>
                    </Link>
                </AccountContainer>
            </InnerLoginContainer>
            <Footer />
        </MainLoginContainer>
    )
}

export default SignUp;
