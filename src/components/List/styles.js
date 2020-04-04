import styled from 'styled-components/native';
import {colors} from '../colors';

export const ContentArea = styled.View`
  width: 100%;
  align-items: center;
  margin: 7px 0;
`;

export const Content = styled.View`
  height: auto;
  background: ${colors.white};
  width: 90%;
  flex-direction: row;
  border-radius: 5px;
`;

export const Category = styled.View`
  height: 100%;
  width: 15px;
  background: ${props =>
    props.category === 'basicos'
      ? `${colors.grayBas}`
      : props.category === 'bebidas'
      ? `${colors.greenBeb}`
      : props.category === 'besteiras'
      ? `${colors.yellowGul}`
      : props.category === 'carnes'
      ? `${colors.redCar}`
      : props.category === 'higiene'
      ? `${colors.blueHig}`
      : props.category === 'hortifruti'
      ? `${colors.greenHort}`
      : props.category === 'limpeza'
      ? `${colors.blueLim}`
      : props.category === 'padaria'
      ? `${colors.beigePa}`
      : props.category === 'outros'
      ? `${colors.blackText}`
      : '#fff'};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ContentItemArea = styled.View`
  padding: 10px;
  flex: 1;
`;

export const CategoryArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentCategoryText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.lightBlack};
  text-transform: capitalize;
  margin-bottom: 15px;
`;

export const ContentItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentText = styled.Text`
  font-size: 22px;
  color: ${colors.darkGray};
  flex: 1;
  padding-right: 5px;
`;

export const ContentValue = styled.Text`
  font-size: 22px;
  color: ${colors.darkGray};
`;

export const ButtonSwipe = styled.TouchableOpacity``;

export const LeftArea = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 7px 0;
  margin-left: 20px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
`;

export const RightArea = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 7px 0;
  margin-right: 20px;
`;
