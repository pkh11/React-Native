import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { create, createStackNavigator } from "react-navigation-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home screen</Text>
    </View>
  );
}

const AppNavigator = createStackNavigator({
  Home:{
    screen: HomeScreen,
  },
});

const AppContainer = createAppContainer( AppNavigator );

export default function App() {
  return (
    <AppContainer></AppContainer>
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
