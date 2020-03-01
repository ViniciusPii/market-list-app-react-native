import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Background, Title} from '../../components/styles';
import {
  Container,
  Value,
  ValueText,
  ContentArea,
  Content,
  Category,
  ContentItem,
  ContentText,
  ContentCategoryText,
  ContentItemArea,
  ContentValue,
} from './HomeStyle';

const Home = () => {
  return (
    <Background>
      <Container>
        <Title> Olá : ) </Title>
        <ValueText>Este é o valor da sua Compra:</ValueText>
        <Value>R$ 120,00</Value>
        <ContentArea>
          <Content>
            <Category />
            <ContentItemArea>
              <ContentCategoryText>Hortifruti</ContentCategoryText>
              <ContentItem>
                <ContentText>Limão</ContentText>
                <ContentValue>R$ 2,50</ContentValue>
              </ContentItem>
            </ContentItemArea>
          </Content>
        </ContentArea>
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
