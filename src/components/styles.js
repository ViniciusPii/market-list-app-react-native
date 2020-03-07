import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from './colors';

export const KeyboardAvoid = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Background = styled(LinearGradient).attrs({
  colors: [colors.pink, colors.cianBlue],
})`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleArea = styled.View``;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 25px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: `${colors.grayPlaceholder}`,
})`
  height: 50px;
  width: 85%;
  background-color: ${colors.white};
  padding-left: 10px;
  border-radius: 7px;
  margin-top: 15px;
  font-size: 16px;
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
