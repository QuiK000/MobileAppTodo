import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from './src/Components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar home="Главная" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
