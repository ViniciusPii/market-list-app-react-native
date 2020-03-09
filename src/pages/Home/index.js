import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

import {Background, Title} from '../../components/styles';
import {Container, Value, ValueText, List} from './styles';
import ListItem from '../../components/List';

const Home = () => {
  const items = [
    {id: 1, item: 'Limão', category: 'Hortifruti'},
    {id: 2, item: 'Abacaxi', category: 'Hortifruti'},
    {id: 3, item: 'Pera', category: 'Hortifruti'},
    {id: 4, item: 'Uva', category: 'Hortifruti'},
    {id: 5, item: 'Morango', category: 'Hortifruti'},
  ];

  return (
    <Background>
      <Container>
        <Title> Olá : ) </Title>
        <ValueText>Este é o valor da sua Compra:</ValueText>
        <Value>R$ 120,00</Value>
        <List
          data={items}
          keyExtractor={items.id}
          renderItem={({item}) => <ListItem data={item} />}
        />
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
