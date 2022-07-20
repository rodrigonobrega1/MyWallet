import React, {useState} from "react";

import LogImg from "../../assets/wallet.png";

import { Container, Logo, Form, FormTitle } from './styles'

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/auth";

const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { signIn } = useAuth();

    return (
        <Container>

            <Logo>
                <img src={LogImg} alt="Logo My Wallet" />
                <h2>My Wallet</h2>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>
                    <h3>Log In</h3>
                </FormTitle>

                <Input type="email" required placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <Button type="submit">Enter</Button>
            </Form>
        </Container>
    );
} 

export default SignIn