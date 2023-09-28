import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {AppHeader} from '../AppHeader';
import {AppInput} from '../AppInput';
import {AppText} from '../AppText';
import {AppButton} from '../AppButton';
import {AppStatusBar} from '../AppStatusBar';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../Context';
import {Formik} from 'formik';
import * as yup from 'yup';

export const SignUp = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [conirmPassword, setConfirmPassWord] = useState('');
  const [hidePassWord, setHidePassWord] = useState(true);

  const swithToSignIn = () => {
    navigation.navigate('SignIn' as never);
  };
  const singUpValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is Required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
        'Password must include at least one uppercase letter, one lowercase letter, and one number',
      )
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View
        style={[
          styles.container,
          {backgroundColor: theme.colorScheme.background},
        ]}>
        <AppStatusBar />
        <AppHeader
          icon={require('App/assets/arrowBackIcon.png')}
          title="Sign Up"
          onPress={swithToSignIn}
        />
        <Formik
          validationSchema={singUpValidationSchema}
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={() => console.log(email)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <View style={{marginBottom: 20}}>
                <View style={{marginVertical: 15}}>
                  <AppInput
                    icon={require('App/assets/deleteIcon.png')}
                    title="Email"
                    placeholder="Email"
                    onChangeText={emailText => {
                      setEmail(emailText);
                      handleChange('email')(emailText);
                    }}
                    onBlur={handleBlur('email')}
                    value={email}
                    keyboardType="email-address"
                    txtInputStyle={{
                      borderColor:
                        errors.email && touched.email
                          ? '#E31251'
                          : theme.colorScheme.onBackground,
                    }}
                    iconPress={() => {
                      setEmail('');
                    }}
                  />
                  {errors.email && (
                    <AppText
                      type="inputTitle"
                      style={{
                        color: '#E31251',
                        paddingLeft: 20,
                        paddingTop: 5,
                      }}>
                      {errors.email}
                    </AppText>
                  )}
                </View>
                <View style={{paddingBottom: 15}}>
                  <AppInput
                    icon={require('App/assets/eyeSlashIcon.png')}
                    title="Password"
                    placeholder="Password"
                    secureTextEntry={hidePassWord}
                    onChangeText={passwordText => {
                      handleChange('password')(passwordText);
                      setPassWord(passwordText);
                    }}
                    onBlur={handleBlur('password')}
                    value={password}
                    iconPress={() => setHidePassWord(!hidePassWord)}
                    txtInputStyle={{
                      borderColor:
                        errors.password && touched.password
                          ? '#E31251'
                          : theme.colorScheme.onBackground,
                    }}
                  />
                  <AppText
                    type="inputTitle"
                    children="At least 8 charaters, with at least 1 uppercase,1 lowercse and 1 number."
                    style={{
                      paddingLeft: 20,
                      marginTop: 20,
                      color: '#A0ADBC',
                      marginBottom: 15,
                    }}
                  />
                  <AppInput
                    icon={require('App/assets/eyeSlashIcon.png')}
                    title="Confirm Password"
                    placeholder="Enter confirm password"
                    secureTextEntry={hidePassWord}
                    onChangeText={passwordText => {
                      handleChange('confirmPassword')(passwordText);
                      setConfirmPassWord(passwordText);
                    }}
                    onBlur={handleBlur('confirmPassword')}
                    value={conirmPassword}
                    iconPress={() => setHidePassWord(!hidePassWord)}
                    txtInputStyle={{
                      borderColor:
                        errors.confirmPassword && touched.confirmPassword
                          ? '#E31251'
                          : theme.colorScheme.onBackground,
                    }}
                  />
                  {errors.confirmPassword && (
                    <AppText
                      type="inputTitle"
                      style={{
                        color: '#E31251',
                        paddingLeft: 20,
                        paddingTop: 5,
                      }}>
                      {errors.confirmPassword}
                    </AppText>
                  )}
                </View>
              </View>
              <TouchableOpacity style={{marginTop: 10}} onPress={swithToSignIn}>
                <AppText
                  type="input"
                  children="I already have an account. Sign in now"
                  style={{color: '#0071F7', textAlign: 'center'}}
                />
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <AppButton
                  title="Sign Up"
                  buttonStyle={{width: '95%', height: 40}}
                  disabled={!isValid}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
