/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {Platform, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import firebase from '../../services/firebase';

import {
  Background,
  Button,
  ButtonText,
  Container,
  FooterArea,
  FooterButton,
  FooterButtonText,
  FooterText,
  Input,
  KeyboardAvoid,
} from '../../components/styles';
import {LogoText, Text, TextBold, LogoArea} from './styles';
import {colors} from '../../components/colors';
import Logo from '../../components/Logo';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const logar = () => {
    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        navigation.navigate('Home');
      })
      .catch(erro => {
        alert('Ah não! Usuário ou Senha incorretos');
        setLoading(false);
      });
  };

  return (
    <Background>
      <KeyboardAvoid behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        <Container>
          <Logo />
          <Input
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType={'email-address'}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            value={email}
          />
          <Input
            autoCorrect={false}
            onChangeText={text => setPassword(text)}
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
          />
          <Button onPress={logar}>
            {loading ? (
              <ActivityIndicator color={colors.white} size={'large'} />
            ) : (
              <ButtonText>Login</ButtonText>
            )}
          </Button>
          <FooterArea>
            <FooterText>Ainda não possui uma conta? </FooterText>
            <FooterButton onPress={() => navigation.navigate('CreateAccount')}>
              <FooterButtonText>Criar</FooterButtonText>
            </FooterButton>
          </FooterArea>
        </Container>
      </KeyboardAvoid>
    </Background>
  );
};

export default Login;
