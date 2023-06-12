import React from 'react';
import {
    Container,
    Content,
    ForgotPasswordButton,
    ForgotPasswordButtonTitle,
    Logo,
    Title,
} from './styles';
import { Input } from '../../components/Form/Input';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';

import logo from '../../assets/logo.png';

export const SignIn: React.FunctionComponent = () => {
    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flex: 1 }}
        >
            <Container>
                <Content>
                    <Logo source={logo} />
                    <Title> Faça seu Login</Title>

                    <Input placeholder="Email" />
                    <Input placeholder="Senha" />

                    <Button title="Entrar" />
                    <ForgotPasswordButton>
                        <ForgotPasswordButtonTitle>
                            Esqueci minha senha
                        </ForgotPasswordButtonTitle>
                    </ForgotPasswordButton>
                </Content>
            </Container>
        </ScrollView>
    );
};
