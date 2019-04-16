import React from 'react';
import { TextInput, View, Text } from 'react-native';

const TextArea = (
  { label, value, onChangeText, placeholder, secureTextEntry, multiline, numberOfLines, keyboardType }) => {

const { inputStyle, labelStyle, containerStyle, wrapAll } = styles;

  return (
    <View style={wrapAll}>
     <Text style={labelStyle}>{label}</Text>
      <View style={containerStyle}>    
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          multiline={multiline}
          numberOfLines={numberOfLines}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
        />
      </View>
    </View>

  );
};

const styles = {
  wrapAll: {
    flex: 1,
    flexDirection: 'column',

  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 8,
    fontSize: 14,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    textAlignVertical: 'top'

 

  },
  labelStyle: {
    fontSize: 14,
    flex: 1,
    paddingLeft: 5,
    fontWeight: '600',
    marginTop: 16,
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DEE4ED',
    height: 88
  }
};

export { TextArea };
