import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../../components/header';

const ToDosSreen = () => {
  return (
    <View style={styles.todosContainer}>
      <Header />
      {/* <TouchableOpacity></TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  todosContainer: {
    borderWidth: 2,
    flex: 1,
    borderColor: '#fff',
  },

  text: {
    color: '#fff',
  },
});

export default ToDosSreen;
