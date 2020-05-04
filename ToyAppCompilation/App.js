import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Thanos from './pages/Thanos';
import Lotto from './pages/Lotto';
import List from './pages/List';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// 네비게이터 생성
const Stack = createStackNavigator({
  List,
  Thanos,
  Lotto,
});

// 컨테이너 생성
// const AppContainer = createAppContainer(Stack);


export default function App() {
  return (
    <Stack></Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
