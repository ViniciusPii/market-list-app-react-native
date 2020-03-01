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

export const ContentArea = styled.View`
  width: 100%;
  align-items: center;
  margin: 7px 0;
`;

export const Content = styled.View`
  height: 80px;
  background: ${colors.white};
  width: 90%;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;

export const Category = styled.View`
  height: 80px;
  width: 15px;
  background-color: #0f0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ContentItemArea = styled.View`
  padding-left: 20px;
  flex: 1;
  justify-content: space-between;
`;

export const ContentItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentCategoryText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: ${colors.lightBlack};
`;

export const ContentText = styled.Text`
  font-size: 22px;
  color: ${colors.darkGray};
`;

export const ContentValue = styled.Text`
  font-size: 22px;
  padding-right: 10px;
  color: ${colors.darkGray};
`;
