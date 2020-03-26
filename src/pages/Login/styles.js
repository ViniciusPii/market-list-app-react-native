import styled from 'styled-components/native';
import {LoginButton} from 'react-native-fbsdk';
import {colors} from '../../components/colors';

export const Separator = styled.Text`
  color: ${colors.white};
  margin: 10px 0 15px 0;
  font-size: 16px;
`;

export const BtnFace = styled.TouchableOpacity`
  height: 50px;
  width: 85%;
  background-color: #4464b4;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
