import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParamList} from '../navigations/stack/AuthStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {authNavigations} from '../constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인화면으로 이동"
          onPress={() => {
            navigation.navigate(authNavigations.LOGIN);
          }}></Button>
        <Button
          title="회원가입으로 이동"
          onPress={() => {
            navigation.navigate(authNavigations.SIGNUP);
          }}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomScreen;
