import React from 'react';
import { Container, Content, Title } from './styles';
import { Input } from '../../components/Form/Input';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Form/Button';

export const SignUp: React.FunctionComponent = () => {
    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flex: 1 }}
        >
            <Container>
                <Content>
                    <Title> Cadastre-se</Title>

                    <Input placeholder="Nome completo" />
                    <Input placeholder="Email" />
                    <Input placeholder="Senha" />

                    <Button title="Cadastrar" />
                </Content>
            </Container>
        </ScrollView>
    );
};
