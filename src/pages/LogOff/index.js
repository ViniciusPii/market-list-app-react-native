import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Background,
  Container,
  Title,
  Button,
  ButtonText,
} from '../../components/styles';
import firebase from '../../services/firebase';
import Logo from '../../components/Logo';
import {LoginManager} from 'react-native-fbsdk';

const LogOff = ({navigation}) => {
  const handleClick = () => {
    Alert.alert('Já vai? =/', 'Deseja Realmente Sair?', [
      {text: 'Cancelar'},
      {
        text: 'Sair',
        onPress: () => {
          firebase.auth().signOut();
          LoginManager.logOut();
          navigation.navigate('Login');
        },
      },
    ]);
  };

  return (
    <Background>
      <Container>
        <Logo />
        <Button onPress={handleClick}>
          <ButtonText>Sair</ButtonText>
        </Button>
      </Container>
    </Background>
  );
};

LogOff.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({tintColor}) => (
    <Icon name="exit-to-app" size={35} color={tintColor} />
  ),
};

export default LogOff;
