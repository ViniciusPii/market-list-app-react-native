import React from 'react';
import {
  Background,
  Title,
  Input,
  Button,
  ButtonText,
  ContainerItem,
} from '../../components/styles';
import Picker from '../../components/Picker';

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
        <Button
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <ButtonText>Editar</ButtonText>
        </Button>
      </ContainerItem>
    </Background>
  );
};

export default EditItem;
