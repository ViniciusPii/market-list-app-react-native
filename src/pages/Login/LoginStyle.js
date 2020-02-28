import styled from 'styled-components/native';
import {colors} from '../../components/colors';

export const LogoArea = styled.View`
  align-items: center;
  margin-bottom: 35px;
`;

export const LogoText = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 25px;
  color: ${colors.white};
  margin-top: 9px;
`;

export const TextBold = styled.Text`
  font-size: 35px;
  color: ${colors.white};
  font-weight: bold;
`;
