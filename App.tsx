import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import HomeScreen from '@screens/HomeScreen/HomeScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
