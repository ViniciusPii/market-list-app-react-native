import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from './colors';

export const Background = styled(LinearGradient).attrs({
  colors: [colors.pink, colors.cianBlue],
})`
  flex: 1;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 85%;
  background-color: ${colors.white};
  padding-left: 10px;
  border-radius: 7px;
  margin-top: 15px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 85%;
  background-color: ${colors.pink};
  border-radius: 7px;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 20px;
`;

export const FooterArea = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;

export const FooterText = styled.Text`
  font-size: 18px;
  color: ${colors.white};
`;

export const FooterButton = styled.TouchableOpacity`
  font-size: 18px;
`;

export const FooterButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.pink};
`;
