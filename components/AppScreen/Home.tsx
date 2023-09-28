import {View, Text} from 'react-native';
import React from 'react';
import {AppButton} from '../AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../App';

export const Home = () => {
  const navigation = useNavigation();
  const {signOut}: any = React.useContext(AuthContext);
  const handleSignOut = async () => {
    await AsyncStorage.removeItem('logged-in');
    signOut();
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AppButton
        title="Log out"
        onPress={() => {
          handleSignOut();
        }}
      />
    </View>
  );
};
