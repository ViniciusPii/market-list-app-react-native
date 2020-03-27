import React from 'react';
import {PickerView} from './styles';
import RNPickerSelect from 'react-native-picker-select';
import {colors} from '../colors';

const Picker = ({onChange, value}) => {
  return (
    <PickerView>
      <RNPickerSelect
        style={{
          inputIOS: {
            height: 50,
            paddingLeft: 10,
            fontSize: 16,
          },
          inputAndroid: {
            color: `${colors.blackText}`,
          },
        }}
        placeholder={{
          label: 'Categoria',
        }}
        onValueChange={categoty => onChange(categoty)}
        items={[
          {label: 'Hortifruti', value: 'hortifruti'},
          {label: 'Porcarias', value: 'porcarias'},
          {label: 'Mistura', value: 'mistura'},
          {label: 'Limpeza', value: 'limpeza'},
          {label: 'Higiene', value: 'higiene'},
        ]}
      />
    </PickerView>
  );
};

export default Picker;
