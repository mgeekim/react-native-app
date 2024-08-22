/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}></View>
      <Text>텍스트</Text>
      <Button title="버튼 이름" onPress={() => console.log("클릭됨!")}></Button>
      <TextInput />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    // margin: '10%',
    marginHorizontal: 10,
    marginVertical: 10,
  }
});

export default App;
