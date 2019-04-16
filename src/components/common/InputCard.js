import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

const InputCard = (props) => {

  return (
    <View style={styles.wrapper}>
    <Text style={styles.header}>{props.header}</Text>
    <View style={platformStyle.containerStyle}>
      {props.children}
    </View>
    <Text style={styles.helperText}>{props.helperText}</Text>
    </View>
  );
};

const styles = {
  wrapper: {
    marginBottom: 5
  },

  header: {
    fontSize: 16,
    color: '#8E8E93',
    paddingLeft: 16

  },
    helperText: {
    fontSize: 13,
    marginLeft: 20,
    marginTop: 5,
    color: '#95989A'
  },

};



const platformStyle = StyleSheet.create({
    containerStyle: {
    ...Platform.select({
      ios: {
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.10,
      shadowRadius: 3,
      elevation: 2,
      paddingLeft: 16,
      position: 'relative',
      marginTop: 4,
      marginBottom: 4,
      },
      android: {
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.10,
      shadowRadius: 3,
      elevation: 2,
      paddingLeft: 16,
      position: 'relative',
      marginTop: 4,
      marginBottom: 4,
      },
    }),
  },
});

export { InputCard };
