import React from 'react';
import { TextInput, View, Text } from 'react-native';

const LoginInput = (
  { label, value, onChangeText, placeholder, secureTextEntry, multiline, placeholderTextColor,
    numberOfLines, keyboardType, autoCapitalize, returnKeyType, isHidden, size, color }
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
          placeholderTextColor={placeholderTextColor}
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          selectionColor={'white'}
           underlineColorAndroid={'#ffffff00'}
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
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 14,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  labelStyle: {
    fontSize: 17,
    flex: 1,
    paddingLeft: 5,
    fontWeight: '400',
     color: '#fff',
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { LoginInput };
