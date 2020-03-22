/* eslint-disable no-alert */
import {Platform, Keyboard, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';

import firebase from '../../services/firebase';

import {
  KeyboardAvoid,
  Container,
  Background,
  Input,
  Button,
  ButtonText,
  FooterText,
  FooterArea,
  FooterButton,
  FooterButtonText,
  Title,
  TitleArea,
} from '../../components/styles';
import {colors} from '../../components/colors';

const CreateAccount = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const createUser = () => {
    setLoading(true);

    if (!email || !password) {
      alert('Você precisa preencher email e senha ;)');
      setLoading(false);
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        let uid = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref('users')
          .child(uid)
          .set({
            email: email,
          });

        firebase
          .database()
          .ref('order')
          .child(uid)
          .set({
            order: 0,
          });
        Keyboard.dismiss();
        alert('Cadastrado com sucesso!');
        setLoading(false);
        setEmail('');
        setPassword('');
        navigation.navigate('Login');
      })
      .catch(erro => {
        setLoading(false);
        switch (erro.message) {
          case 'Password should be at least 6 characters':
            alert('Sua senha deve ter no minimo 6 caracteres!');
            break;

          case 'The email address is already in use by another account.':
            alert('Esse email já está sendo utilizado por outro usuário!');
            break;

          case 'The email address is badly formatted.':
            alert('O formato do email não é válido!');
            break;

          default:
            alert('Não foi possível cadastrar o Usuário');
            break;
        }
      });
  };

  return (
    <KeyboardAvoid behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <Background>
        <Container>
          <TitleArea>
            <Title>Crie sua conta, é rapidinho! ;)</Title>
          </TitleArea>
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
            value={password}
          />
          <Button onPress={createUser}>
            {loading ? (
              <ActivityIndicator color={colors.white} size={'large'} />
            ) : (
              <ButtonText>Cadastrar</ButtonText>
            )}
          </Button>
          <FooterArea>
            <FooterText>Já possui uma conta? </FooterText>
            <FooterButton onPress={() => navigation.navigate('Login')}>
              <FooterButtonText>Entrar</FooterButtonText>
            </FooterButton>
          </FooterArea>
        </Container>
      </Background>
    </KeyboardAvoid>
  );
};

export default CreateAccount;
