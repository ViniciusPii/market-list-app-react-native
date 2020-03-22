import React, {useEffect} from 'react';
import firebase from 'firebase';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../colors';
import {
  Background,
  Container,
  LogoArea,
  LogoText,
  Text,
  TextBold,
} from '../styles';
import Logo from '../Logo';

const Preload = ({navigation}) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      } else {
        navigation.navigate({routeName: 'Login'});
      }
    });
  });

  return (
    <Background>
      <Container>
        <Logo />
      </Container>
    </Background>
  );
};

export default Preload;
