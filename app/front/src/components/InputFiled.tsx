import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {colors} from '../constants';

interface InputFiledProps extends TextInputProps {
  disabled?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

function InputFiled({disabled = false, ...props}: InputFiledProps) {
  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      <TextInput
        editable={!disabled}
        placeholderTextColor={colors.GRAY_500}
        style={styles.input}
        {...props}
      />
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
});

export default InputFiled;
