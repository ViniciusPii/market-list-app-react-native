import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {
  Keyboard,
  Container,
  Background,
  Input,
  Button,
  ButtonText,
  FooterText,
  FooterArea,
  FooterButton,
  FooterButtonText,
} from '../../components/styles';
import {Title} from './CreateAccountStyle';

const CreateAccount = ({navigation}) => {
  return (
    <Keyboard>
      <Background>
        <Container>
          <Title>Crie sua conta, é rapidinho! ;)</Title>
          <Input placeholder="Nome" autoCorrect={false} />
          <Input placeholder="Email" autoCorrect={false} />
          <Input placeholder="Senha" autoCorrect={false} />
          <Button>
            <ButtonText>Cadastrar</ButtonText>
          </Button>
          <FooterArea>
            <FooterText>Já possui uma conta? </FooterText>
            <FooterButton onPress={() => navigation.navigate('Login')}>
              <FooterButtonText>Entrar</FooterButtonText>
            </FooterButton>
          </FooterArea>
        </Container>
      </Background>
    </Keyboard>
  );
};

export default CreateAccount;
