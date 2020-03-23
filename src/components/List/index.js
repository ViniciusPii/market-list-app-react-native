import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import firebase from '../../services/firebase';

import {
  ButtonSwipe,
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
import {Text, Alert, Modal} from 'react-native';
import {Background, Title, Input, Button, ButtonText} from '../styles';
import {ContainerNew} from '../../pages/NewItem/styles';
import Picker from '../Picker';

const ListItem = ({data}) => {
  const [open, setOpen] = useState(false);
  const [closeCard, setCloseCard] = useState([]);

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
    closeCard.close();
  };

  const handleRight = () => {
    let key = data.key;
    let id = firebase.auth().currentUser.uid;
    Alert.alert('Deseja Realmente Excluir?', '', [
      {
        text: 'Cancelar',
        onPress: () => {
          closeCard.close();
        },
      },
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
      ref={ref => {
        setCloseCard(ref);
      }}
      renderLeftActions={leftActions}
      renderRightActions={rightActions}>
      <ContentArea>
        <Modal animationType="slide" transparent={false} visible={open}>
          <Background>
            <ContainerNew>
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
                  setOpen(false);
                }}>
                <ButtonText>Editar</ButtonText>
              </Button>
            </ContainerNew>
          </Background>
        </Modal>
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
