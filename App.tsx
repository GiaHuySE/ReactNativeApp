import 'react-native-gesture-handler';
import React, {useEffect, useState, useReducer, useMemo} from 'react';
import type {PropsWithChildren} from 'react';
import {View} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackActions, useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {
  ThemeProvider,
  Verify,
  SignUp,
  SignIn,
  ForgotPassword,
  Home,
  LoaderContext,
  LockPassCode,
  ResetPassword,
} from './components';
import AsyncStorage from '@react-native-async-storage/async-storage';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

import {useSetupTheme} from './hooks';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Verify: undefined;
  ResetPassword: undefined;
  Home: undefined;
  LockPassCode: undefined;
};

// Define the state type
type AuthState = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

// Define action types and action creators
type AuthAction =
  | {type: 'RESTORE_TOKEN'; token: string | null}
  | {type: 'SIGN_IN'; token: string}
  | {type: 'SIGN_OUT'};

type AuthContextType = {
  signIn: (data: any) => void; // Replace 'any' with your actual data type
  signOut: () => void;
  signUp: (data: any) => void; // Replace 'any' with your actual data type
};

// Define the initial state
const initialState: AuthState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const authReducer = (prevState: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    default:
      return prevState;
  }
};
export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined,
);

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const theme = useSetupTheme(false);

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('logged-in');
      } catch (e) {}
      dispatch({type: 'RESTORE_TOKEN', token: userToken as any});
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => {
        let userToken;

        try {
          userToken = await AsyncStorage.getItem('logged-in');
          console.log(userToken);
        } catch (e) {}

        dispatch({type: 'SIGN_IN', token: userToken as string});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data: any) => {
        let userToken;

        try {
          userToken = await AsyncStorage.getItem('logged-in');
          console.log(userToken);
        } catch (e) {}
        dispatch({type: 'SIGN_IN', token: userToken as string});
      },
    }),
    [],
  );
  return (
    <ThemeProvider value={theme}>
      <AuthContext.Provider value={authContext}>
        <LoaderContext>
          <View
            style={{flex: 1, backgroundColor: theme.colorScheme.background}}>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                {!state.userToken ? (
                  <Stack.Screen name="SignIn" component={SignIn} />
                ) : (
                  <Stack.Screen name="Home" component={Home} />
                )}
                <Stack.Screen
                  name="LockPassCode"
                  component={LockPassCode}></Stack.Screen>
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="Verify" component={Verify} />
                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </LoaderContext>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default App;
