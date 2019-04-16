import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

const FullWrapper = (props) => {
  return (
    <View style={styles.fullWrapper}>
      {props.children}
    </View>
  );
};


const styles = StyleSheet.create({
  fullWrapper: {
    ...Platform.select({
      ios: {
      backgroundColor: '#fafafa',
      flex: 1,
      paddingTop: 65
      },
      android: {
      backgroundColor: '#fafafa',
      flex: 1,
      paddingTop: 55
      },
    }),
  },
});

export { FullWrapper };
