import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#FF2D55',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#fff',
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 22,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#8E8E93',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.60,
    shadowRadius: 7,
    elevation: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    marginTop: 8,
    position: 'relative',
    height: 44,
    flex: 1

  },
};





export { Button };
