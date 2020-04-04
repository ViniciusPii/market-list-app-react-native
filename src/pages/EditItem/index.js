import React, {useEffect, useState} from 'react';
import {
  Background,
  Title,
  Input,
  Button,
  ButtonText,
  ContainerItem,
} from '../../components/styles';
import Picker from '../../components/Picker';

import firebase from '../../services/firebase';

const EditItem = ({onChange, navigation}) => {
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  const [qtd, setQtd] = useState(1);
  const [category, setCategory] = useState();
  const [order, setOrder] = useState(order);

  const id = navigation.state.params.id;
  let uid = firebase.auth().currentUser.uid;

  useEffect(() => {
    firebase
      .database()
      .ref('lista')
      .child(uid)
      .child(id)
      .once('value', aqui => {
        setCategory(aqui.val().category);
        setItem(aqui.val().item);
        setPrice(aqui.val().singlePrice);
        setQtd(aqui.val().qtd);
        setOrder(aqui.val().order);
      });
  }, [id, uid]);

  const handleSubmitEdit = () => {
    if (!category || item === '' || price === '' || qtd === '') {
      alert('Preencha todos os campos');
      return;
    }

    if (price <= 0 || isNaN(price)) {
      alert('Preço inexistente');
      return;
    }

    if (qtd <= 0 || isNaN(qtd)) {
      alert('Quantidade inexistente');
      return;
    }

    firebase
      .database()
      .ref('lista')
      .child(uid)
      .child(id)
      .set({
        category,
        item,
        price: parseFloat(price * qtd),
        qtd: parseFloat(qtd),
        order: parseFloat(order),
        singlePrice: price,
      });

    navigation.navigate('Home');
  };

  return (
    <Background>
      <ContainerItem>
        <Title>Editar Item</Title>
        <Picker value={category} onChange={setCategory} />
        <Input
          placeholder="Item"
          value={item}
          onChangeText={t => setItem(t)}
          returnKeyType="next"
        />
        <Input
          placeholder="Valor"
          value={String(price)}
          onChangeText={t => setPrice(t.replace(',', '.'))}
          keyboardType="number-pad"
          returnKeyType="next"
        />
        <Input
          placeholder="Quantidade: Valor Padrão é 1"
          value={String(qtd)}
          onChangeText={t => setQtd(t)}
          keyboardType="number-pad"
        />
        <Button onPress={handleSubmitEdit}>
          <ButtonText>Editar</ButtonText>
        </Button>
      </ContainerItem>
    </Background>
  );
};

export default EditItem;
