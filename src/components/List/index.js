import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import firebase from '../../services/firebase';

import {
  ButtonSwipe,
  ButtonText,
  Category,
  Content,
  ContentArea,
  ContentCategoryText,
  ContentItem,
  ContentItemArea,
  ContentText,
  ContentValue,
  LeftArea,
  RightArea,
} from './styles';
import {colors} from '../colors';
import {Text, Alert} from 'react-native';

const ListItem = ({data}) => {
  const leftActions = () => {
    return (
      <ButtonSwipe onPress={handleLeft}>
        <LeftArea>
          <Icon name="pencil-outline" size={30} color={colors.white} />
          <ButtonText>Editar</ButtonText>
        </LeftArea>
      </ButtonSwipe>
    );
  };

  const rightActions = () => {
    return (
      <ButtonSwipe onPress={handleRight}>
        <RightArea>
          <Icon name="trash-can-outline" size={30} color={colors.white} />
          <ButtonText>Excluir</ButtonText>
        </RightArea>
      </ButtonSwipe>
    );
  };

  const handleLeft = () => {
    alert('editar');
  };

  const handleRight = () => {
    let key = data.key;
    let id = firebase.auth().currentUser.uid;
    Alert.alert('Deseja Realmente Excluir?', '', [
      {text: 'Cancelar'},
      {
        text: 'Excluir',
        onPress: () => {
          firebase
            .database()
            .ref('lista')
            .child(id)
            .child(key)
            .remove();
        },
      },
    ]);
  };

  return (
    <Swipeable
      renderLeftActions={leftActions}
      renderRightActions={rightActions}>
      <ContentArea>
        <Content>
          <Category category={data.category} />
          <ContentItemArea>
            <ContentCategoryText>{data.category}</ContentCategoryText>
            <ContentItem>
              <ContentText>{data.item}</ContentText>
              <ContentValue>
                R${' '}
                {parseFloat(data.price)
                  .toFixed(2)
                  .replace('.', ',')}
              </ContentValue>
            </ContentItem>
          </ContentItemArea>
        </Content>
      </ContentArea>
    </Swipeable>
  );
};

export default ListItem;
