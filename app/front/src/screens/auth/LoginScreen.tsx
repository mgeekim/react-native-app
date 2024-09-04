import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputFiled from '../../components/InputFiled';

function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputFiled placeholder="이메일" />
        <InputFiled placeholder="비밀번호" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});

export default LoginScreen;
