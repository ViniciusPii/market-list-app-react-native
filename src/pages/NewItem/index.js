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

  const handleSubmit = () => {
    Keyboard.dismiss();
    let uid = firebase.auth().currentUser.uid;
    let key = firebase
      .database()
      .ref('lista')
      .child(uid)
      .push().key;

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
      });

    setCategory(category);
    setItem('');
    setPrice('');
    setQtd(1);

    navigation.navigate('Home');
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
          onChangeText={t => setPrice(t)}
          keyboardType="number-pad"
        />
        <Input
          placeholder="Quantidade"
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
