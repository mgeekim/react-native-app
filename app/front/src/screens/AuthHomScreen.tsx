import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function AuthHomScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인화면으로 이동"
          onPress={() => {
            navigation.navigate('Login');
          }}></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomScreen;
