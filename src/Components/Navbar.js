import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Navbar = props => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{props.home}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    backgroundColor: '#f3f3f3'
  },
  title: {
    margin: 35,
    fontSize: 18
  }
})