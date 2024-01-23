import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const Bai3 = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{position: 'absolute', bottom: 60, width: '100%'}}>
        <TextInput placeholder="Nhap tai khoan" style={styles.textInput} />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <TextInput
          secureTextEntry
          placeholder="Nhap mat khau"
          style={styles.textInput}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c0eaff',
    flex: 1,
    position: 'relative',
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    paddingStart: 10,
  },
});

export default Bai3;
