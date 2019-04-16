import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const Spinner = ({ size, message, color }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator color={color} size={size || 'large'} />
      <Text>{message}</Text>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
