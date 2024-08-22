import React from 'react';
import {StyleSheet, View} from 'react-native';
import ToDosSreen from './src/screens/todos';

const App = () => {
  return (
    <View style={styles.layout}>
      <ToDosSreen />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#000',
    color: '#fff',
    flex: 1,
  },
});

export default App;
