import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState, useEffect} from 'react';

import {Background, Title} from '../../components/styles';
import {Container, Value, ValueText, List, DelButton} from './styles';
import ListItem from '../../components/List';

import firebase from '../../services/firebase';
import {colors} from '../../components/colors';
import {Alert} from 'react-native';

const Home = ({navigation}) => {
  const [balance, setBalance] = useState();
  const [list, setList] = useState([]);

  useEffect(() => {
    let uid = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref('lista')
      .child(uid)
      .orderByChild('order')
      .on('value', snapshot => {
        setList([]);

        snapshot.forEach(childItem => {
          let NewList = {
            key: childItem.key,
            category: childItem.val().category,
            item: childItem.val().item,
            price: childItem.val().price,
            qtd: childItem.val().qtd,
          };

          setList(oldArray => [...oldArray, NewList]);
        });
      });
  }, []);

  useEffect(() => {
    setBalance(list.reduce((acc, item) => acc + item.price, 0));
  }, [list]);

  const deleteAll = () => {
    let uid = firebase.auth().currentUser.uid;

    Alert.alert('Deseja Apagar sua Lista?', '', [
      {text: 'Cancelar'},
      {
        text: 'Excluir',
        onPress: () => {
          firebase
            .database()
            .ref('lista')
            .child(uid)
            .remove();
        },
      },
    ]);
  };

  return (
    <Background>
      <Container>
        <Title> Olá : ) </Title>
        <ValueText>Este é o valor da sua Compra:</ValueText>
        <Value>
          R${' '}
          {parseFloat(balance)
            .toFixed(2)
            .replace('.', ',')}
        </Value>
        <List
          data={list}
          keyExtractor={list.id}
          renderItem={({item}) => (
            <ListItem data={item} navigation={navigation} />
          )}
        />
        <DelButton onPress={deleteAll}>
          <Icon name="trash-can-outline" size={30} color={colors.white} />
        </DelButton>
      </Container>
    </Background>
  );
};

Home.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({tintColor}) => (
    <Icon name="format-list-bulleted" size={35} color={tintColor} />
  ),
};

export default Home;
