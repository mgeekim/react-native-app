import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputFiled from '../../components/InputFiled';
import CustomBotton from '../../components/CustomBotton';
import useFrom from '../../hooks/useFrom';

type UserInformation = {
  email: string;
  password: string;
};

const validateLogin = (values: UserInformation) => {
  const errors = {
    email: '',
    password: '',
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = '올바른 이메일 형식이 아닙니다.';
  }

  if (!(values.password.length >= 8 && values.password.length > 20)) {
    errors.password = '비밀번호는 8~20자 사이로 입력해주세요.';
  }

  return errors;
};

function LoginScreen() {
  const login = useFrom({
    initialValue: {
      email: '',
      password: '',
    },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log('values=', login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputFiled
          placeholder="이메일"
          error={login.errors.email}
          touched={login.touched.email}
          inputMode="email"
          {...login.getTextInputProps('email')}
        />
        <InputFiled
          placeholder="비밀번호"
          error={login.errors.password}
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
