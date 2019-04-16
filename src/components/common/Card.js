import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={platformStyle.containerStyle}>
      {props.children}
    </View>
  );
};


const platformStyle = StyleSheet.create({
    containerStyle: {
    ...Platform.select({
      ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.10,
      shadowRadius: 5,
      elevation: 3,
      marginLeft: 8,
      marginRight: 8,
      marginTop: 4,
      marginBottom: 4,
      backgroundColor: '#fff'
      },
      android: {
       shadowColor: '#000',
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.10,
      shadowRadius: 5,
      elevation: 3,
      marginLeft: 8,
      marginRight: 8,
      marginTop: 4,
      marginBottom: 4,
      backgroundColor: '#fff'
      },
    }),
  },
});



export { Card };
