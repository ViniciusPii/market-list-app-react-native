/* eslint-disable no-alert */
import React, {useState, lazy} from 'react';
import {SafeAreaView, Platform, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import firebase from '../../config/firebase';

import {
  Container,
  KeyboardAvoid,
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const logar = () => {
    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        alert('Logou');
        setLoading(false);
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
          <LogoArea>
            <Icon name="cart-outline" size={70} color={colors.white} />
            <LogoText>
              <Text>market</Text>
              <TextBold>list</TextBold>
            </LogoText>
          </LogoArea>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize={'none'}
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType={'email-address'}
          />
          <Input
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
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
