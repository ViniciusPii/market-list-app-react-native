import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Background,
  Input,
  Button,
  ButtonText,
  Title,
} from '../../components/styles';
import {ContainerNew} from '../NewItem/NewItemStyle';
import Picker from '../../components/Picker';

const NewItem = ({onChange}) => {
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState(null);

  return (
    <Background>
      <ContainerNew>
        <Title>Novo Item</Title>
        <Input placeholder="Item" value={item} onChangeText={t => setItem(t)} />
        <Input
          placeholder="Valor"
          value={price}
          onChangeText={t => setPrice(t)}
          keyboardType="numeric"
        />
        <Picker onChange={setCategory} />
        <Button>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </ContainerNew>
    </Background>
  );
};

NewItem.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({tintColor}) => (
    <Icon name="plus-circle" size={35} color={tintColor} />
  ),
};

export default NewItem;
