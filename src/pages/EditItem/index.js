import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {
  Background,
  Container,
  Title,
  Input,
  Button,
  ButtonText,
} from '../../components/styles';
import Picker from '../../components/Picker';
import {ContainerItem} from '../NewItem/styles';

const EditItem = ({navigation}) => {
  return (
    <Background>
      <ContainerItem>
        <Title>Editar Item</Title>
        <Picker onChange={() => {}} />
        <Input
          placeholder="Item"
          value={() => {}}
          onChangeText={() => {}}
          returnKeyType="next"
        />
        <Input
          placeholder="Valor"
          value={() => {}}
          onChangeText={() => {}}
          keyboardType="number-pad"
          returnKeyType="next"
        />
        <Input
          placeholder="Quantidade: Valor Padrão é 1"
          value={() => {}}
          onChangeText={() => {}}
          keyboardType="number-pad"
        />
        <Button onPress={() => {}}>
          <ButtonText>Editar</ButtonText>
        </Button>
      </ContainerItem>
    </Background>
  );
};

export default EditItem;
