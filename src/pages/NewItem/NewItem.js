import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NewItem = () => {
  return (
    <SafeAreaView>
      <Text>Olá New</Text>
    </SafeAreaView>
  );
};

NewItem.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({tintColor}) => (
    <Icon name="plus-circle" size={30} color={tintColor} />
  ),
};

export default NewItem;
