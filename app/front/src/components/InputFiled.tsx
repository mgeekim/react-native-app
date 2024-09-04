import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {colors} from '../constants';

interface InputFiledProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
}

const deviceHeight = Dimensions.get('screen').height;

function InputFiled({disabled = false, error, ...props}: InputFiledProps) {
  return (
    <View
      style={[
        styles.container,
        disabled && styles.disabled,
        Boolean(error) && styles.inputError,
      ]}>
      <TextInput
        editable={!disabled}
        placeholderTextColor={colors.GRAY_500}
        style={styles.input}
        autoCapitalize="none"
        spellCheck={false}
        autoCorrect={false}
        {...props}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: deviceHeight > 700 ? 10 : 8,
  },
  input: {
    fontSize: 16,
    color: colors.BLACK,
    padding: 0,
  },
  disabled: {
    backgroundColor: colors.GRAY_200,
    color: colors.GRAY_700,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },
  error: {
    fontSize: 12,
    color: colors.RED_500,
    paddingTop: 5,
  },
});

export default InputFiled;
