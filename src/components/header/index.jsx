import React from 'react';
import {StyleSheet, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>ToDo Application</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#fff',
  },
  headerText: {
    color: '#000',
    margin: 'auto',
  },
});

export default Header;
