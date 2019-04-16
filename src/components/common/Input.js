import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (
  { label, value, onChangeText, placeholder, secureTextEntry, multiline,
    numberOfLines, keyboardType, autoCapitalize, returnKeyType, isHidden, size, color, editable, maxLength }
  ) => {
const { inputStyle, labelStyle, containerStyle, wrapAll } = styles;

  if (isHidden) {
    return null;
  }
  return (
    <View style={wrapAll}>
      <View style={containerStyle}>
        <Text style={labelStyle}>{label} {size} {color}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          underlineColorAndroid={'#fff'}
          editable={editable}
          maxLength={maxLength}
        />
      </View>
    </View>

  );
};

const styles = {
  wrapAll: {
    flex: 1,
    flexDirection: 'column',
    height: 44
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 14,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  labelStyle: {
    fontSize: 14,
    flex: 1,
    paddingLeft: 5,
    fontWeight: '600'
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DEE4ED'
  }
};

export { Input };
