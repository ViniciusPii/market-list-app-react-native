import React from 'react';
import {LogoArea, LogoText, Text, TextBold} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../colors';

const Logo = () => {
  return (
    <LogoArea>
      <Icon name="cart-outline" size={70} color={colors.white} />
      <LogoText>
        <Text>market</Text>
        <TextBold>list</TextBold>
      </LogoText>
    </LogoArea>
  );
};

export default Logo;
