import React from 'react'; // 필수로 입력해야하는 
import { StyleSheet, Text, View } from 'react-native';

// component 기본적인 형태
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
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
