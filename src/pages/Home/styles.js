import styled from 'styled-components/native';
import {colors} from '../../components/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: 40px;
`;

export const ValueText = styled.Text`
  font-size: 25px;
  color: ${colors.white};
  font-style: italic;
`;

export const Value = styled.Text`
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.white};
  margin-bottom: 30px;
`;

export const List = styled.FlatList`
  width: 100%;
`;

export const DelButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  /* background-color: ${colors.redDel}; */
  border-radius: 50px;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 10;
  right: 25px; 
`;
