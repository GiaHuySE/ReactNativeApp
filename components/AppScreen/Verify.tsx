import {View, Text, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppStatusBar} from '../AppStatusBar';
import {AppHeader} from '../AppHeader';
import {AppInput} from '../AppInput';
import {AppButton} from '../AppButton';
import {AppText} from '../AppText';

export const Verify = () => {
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
        title="Verify"
      />
      <View style={{paddingLeft: 20, paddingTop: 20}}>
        <AppText
          type="input"
          children="Enter the OTP that sent to your email"
        />
      </View>
      <View
        style={{
          paddingTop: 15,

          height: '15%',
        }}>
        <AppInput
          title="OTP"
          icon={require('App/assets/deleteIcon.png')}
          placeholder="Enter your OTP code"
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <AppText type="h4" children="Resend" style={{color: '#0071F7'}} />
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
