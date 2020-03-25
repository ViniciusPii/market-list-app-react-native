import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const EditItem = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Olá</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditItem;
