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
        value={value}
        items={[
          {label: 'Básicos', value: 'basicos'},
          {label: 'Bebidas', value: 'bebidas'},
          {label: 'Besteiras', value: 'besteiras'},
          {label: 'Carnes', value: 'carnes'},
          {label: 'Higiene', value: 'higiene'},
          {label: 'Hortifruti', value: 'hortifruti'},
          {label: 'Limpeza', value: 'limpeza'},
          {label: 'Padaria', value: 'padaria'},
          {label: 'Outros', value: 'outros'},
        ]}
      />
    </PickerView>
  );
};

export default Picker;
