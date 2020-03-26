/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {Platform, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import firebase from 'firebase';

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
import {colors} from '../../components/colors';
import Logo from '../../components/Logo';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import {BtnFace, Separator} from './styles';

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

  const logFace = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then(res => {
        if (res.isCancelled) {
          return Promise.reject(new Error('cancelado'));
        }
        return AccessToken.getCurrentAccessToken();
      })
      .then(data => {
        const credential = firebase.auth.FacebookAuthProvider.credential(
          data.accessToken,
        );
        return firebase.auth().signInWithCredential(credential);
      })
      .then(currentUser => {
        let uid = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref('users')
          .child(uid)
          .set({
            email: currentUser.user.email,
          });

        firebase
          .database()
          .ref('order')
          .child(uid)
          .set({
            order: 0,
          });
      })
      .catch(error => {
        alert('tururu');
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
          <Separator>Ou</Separator>
          <BtnFace onPress={logFace}>
            <Icon name="facebook" size={30} color={colors.white} />
            <ButtonText>Login com Facebook</ButtonText>
          </BtnFace>
        </Container>
      </KeyboardAvoid>
    </Background>
  );
};

export default Login;
