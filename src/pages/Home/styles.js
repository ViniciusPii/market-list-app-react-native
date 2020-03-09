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
