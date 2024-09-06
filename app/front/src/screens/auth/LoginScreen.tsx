import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputFiled from '../../components/InputFiled';
import CustomBotton from '../../components/CustomBotton';
import useFrom from '../../hooks/useFrom';

function LoginScreen() {
  const login = useFrom({
    initialValue: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = () => {
    console.log('values=', login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputFiled
          placeholder="이메일"
          error={'이메일을 입력하세요.'}
          touched={login.touched.email}
          inputMode="email"
          {...login.getTextInputProps('email')}
        />
        <InputFiled
          placeholder="비밀번호"
          error={'비밀번호를 입력하세요'}
          touched={login.touched.password}
          inputMode="numeric"
          secureTextEntry
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomBotton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
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
    marginBottom: 30,
  },
});

export default LoginScreen;
