import React, {useEffect} from 'react';
import firebase from 'firebase';
import {Background, Container} from '../styles';
import {LogoArea, LogoText, TextBold, Text} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../colors';

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
        <LogoArea>
          <Icon name="cart-outline" size={70} color={colors.white} />
          <LogoText>
            <Text>market</Text>
            <TextBold>list</TextBold>
          </LogoText>
        </LogoArea>
      </Container>
    </Background>
  );
};

export default Preload;
