import {
  View,
  KeyboardAvoidingView,
  BackHandler,
  Text,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppHeader} from '../AppHeader';
import {AppStatusBar} from '../AppStatusBar';
import {AppInput} from '../AppInput';
import {AppButton} from '../AppButton';

export const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <AppStatusBar />
      <AppHeader
        icon={require('App/assets/arrowBackIcon.png')}
        title="Forgot Password"
      />
      <View style={{flex: 1, paddingTop: 15}}>
        <AppInput title="Email" icon={require('App/assets/deleteIcon.png')} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <AppButton title="Verify" buttonStyle={{width: '95%', height: 40}} />
      </View>
    </KeyboardAvoidingView>
  );
};
