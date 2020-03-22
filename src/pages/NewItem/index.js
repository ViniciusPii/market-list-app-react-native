import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Background,
  Input,
  Button,
  ButtonText,
  Title,
} from '../../components/styles';
import {ContainerNew} from './styles';
import Picker from '../../components/Picker';

import firebase from '../../services/firebase';
import {Keyboard} from 'react-native';

const NewItem = ({onChange, navigation}) => {
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  const [qtd, setQtd] = useState(1);
  const [category, setCategory] = useState(null);
  const [order, setOrder] = useState(0);

  const handleSubmit = () => {
    Keyboard.dismiss();
    let uid = firebase.auth().currentUser.uid;
    let key = firebase
      .database()
      .ref('lista')
      .child(uid)
      .push().key;

    setOrder(order - 1);

    firebase
      .database()
      .ref('lista')
      .child(uid)
      .child(key)
      .set({
        category: category,
        item: item,
        price: parseFloat(price * qtd),
        qtd: parseFloat(qtd),
        order: order,
      });

    navigation.navigate('Home');

    setCategory(category);
    setItem('');
    setPrice('');
    setQtd(1);
  };

  return (
    <Background>
      <ContainerNew>
        <Title>Novo Item</Title>
        <Picker onChange={setCategory} />
        <Input placeholder="Item" value={item} onChangeText={t => setItem(t)} />
        <Input
          placeholder="Valor"
          value={price}
          onChangeText={t => setPrice(t.replace(',', '.'))}
          keyboardType="number-pad"
        />
        <Input
          placeholder="Quantidade: Valor Padrão é 1"
          value={qtd}
          onChangeText={t => setQtd(t)}
          keyboardType="number-pad"
        />
        <Button onPress={handleSubmit}>
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
