import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import Routes from './routes';
import {colors} from './components/colors';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.pink} barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;
