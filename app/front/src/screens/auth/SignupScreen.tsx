import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputFiled from '../../components/InputFiled';
import useFrom from '../../hooks/useFrom';
import CustomBotton from '../../components/CustomBotton';
import {validateSignup} from '../../utils';

function SignupScreen() {
  const signup = useFrom({
    initialValue: {email: '', password: '', passwordConfirm: ''},
    validate: validateSignup,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputFiled
          placeholder="이메일"
          error={signup.errors.email}
          touched={signup.touched.email}
          inputMode="email"
          {...signup.getTextInputProps('email')}
        />
        <InputFiled
          placeholder="비밀번호"
          error={signup.errors.password}
          touched={signup.touched.password}
          inputMode="numeric"
          secureTextEntry
          {...signup.getTextInputProps('password')}
        />
        <InputFiled
          placeholder="비밀번호 확인"
          error={signup.errors.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          inputMode="numeric"
          secureTextEntry
          {...signup.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomBotton label="회원가입" />
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

export default SignupScreen;
