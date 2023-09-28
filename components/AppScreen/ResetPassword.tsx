import {View, Text, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {AppStatusBar} from '../AppStatusBar';
import {AppHeader} from '../AppHeader';
import {AppInput} from '../AppInput';
import {AppText} from '../AppText';
import {AppButton} from '../AppButton';

export const ResetPassword = () => {
  return (
    <KeyboardAvoidingView style={{flex: 1, flexDirection: 'column'}}>
      <AppStatusBar />
      <AppHeader
        icon={require('App/assets/arrowBackIcon.png')}
        title="Reset Password"
      />
      <View
        style={{
          height: '35%',
          flexDirection: 'column',
          paddingTop: 10,
        }}>
        <AppInput
          icon={require('App/assets/eyeSlashIcon.png')}
          title="New Password"
        />
        <AppText
          type="input"
          children="At least 8 charaters, with at least 1 uppercase,1 lowercse and 1 number."
          style={{paddingLeft: 20, paddingVertical: 15}}
        />
        <AppInput
          icon={require('App/assets/eyeSlashIcon.png')}
          title="New Password"
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 20,
        }}>
        <AppButton
          title="Reset password"
          buttonStyle={{width: '95%', height: 40}}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
