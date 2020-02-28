import React from 'react';
import {SafeAreaView, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  Keyboard,
  Background,
  Input,
  Button,
  ButtonText,
  FooterArea,
  FooterButton,
  FooterText,
  FooterButtonText,
} from '../../components/styles';
import {LogoText, Text, TextBold, LogoArea} from './LoginStyle';
import {colors} from '../../components/colors';

const Login = ({navigation}) => {
  return (
    <Background>
      <Keyboard behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <Container>
          <LogoArea>
            <Icon name="cart-outline" size={70} color={colors.white} />
            <LogoText>
              <Text>market</Text>
              <TextBold>list</TextBold>
            </LogoText>
          </LogoArea>
          <Input placeholder="Nome" autoCorrect={false} />
          <Input
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry={true}
          />
          <Button>
            <ButtonText>Login</ButtonText>
          </Button>
          <FooterArea>
            <FooterText>Ainda não possui uma conta? </FooterText>
            <FooterButton onPress={() => navigation.navigate('CreateAccount')}>
              <FooterButtonText>Criar</FooterButtonText>
            </FooterButton>
          </FooterArea>
        </Container>
      </Keyboard>
    </Background>
  );
};

export default Login;
