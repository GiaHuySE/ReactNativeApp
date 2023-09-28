import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {AppStatusBar} from '../AppStatusBar';
import {AppHeader} from '../AppHeader';
import {AppInput} from '../AppInput';
import {AppText} from '../AppText';
import {AppButton} from '../AppButton';
import {useNavigation} from '@react-navigation/native';
import {useLoader, useTheme} from '../Context';
import {Formik} from 'formik';
import * as yup from 'yup';
import dummyUserData from '../../dummyData/useDummy';
import {AppLoader} from '../AppLoader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthContext, RootStackParamList} from '../../App';

export const SignIn = ({}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const swithToSignUp = () => {
    navigation.navigate('SignUp' as never);
  };
  const {isLoading, showLoader, hideLoader} = useLoader();
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [hidePassWord, setHidePassWord] = useState(true);
  const {signIn}: any = React.useContext(AuthContext);

  const handleSignIn = async () => {
    signIn({email, password});
    await AsyncStorage.setItem('logged-in', email);
  };
  const loginValidationSchema = yup.object().shape({
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
          title="Sign In"
          icon={require('App/assets/arrowBackIcon.png')}
          style={{opacity: 0}}
          isHiddenImage={true}
        />
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={() => {}}>
          {({handleChange, handleBlur, errors, isValid, touched}) => (
            <>
              <View style={{flexDirection: 'column', marginVertical: 15}}>
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
                <View style={{marginTop: 20}}>
                  <AppInput
                    icon={require('App/assets/eyeSlashIcon.png')}
                    title="PassWord"
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
                  {errors.password && (
                    <AppText
                      type="inputTitle"
                      style={{
                        color: '#E31251',
                        paddingLeft: 20,
                        paddingTop: 5,
                      }}>
                      {errors.password}
                    </AppText>
                  )}
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={{margin: 20}}
                  onPress={() => {
                    navigation.navigate('ForgotPassword' as never);
                  }}>
                  <AppText
                    type="input"
                    children="Forgot Password"
                    style={{color: '#0071F7'}}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={swithToSignUp}>
                  <AppText
                    type="input"
                    children="Don't have account? Create now"
                    style={{color: '#0071F7'}}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <AppButton
                  title="Sign In"
                  buttonStyle={{width: '95%', height: 40}}
                  disabled={!isValid}
                  //
                  onPress={() => handleSignIn()}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
      {isLoading ? <AppLoader /> : null}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
