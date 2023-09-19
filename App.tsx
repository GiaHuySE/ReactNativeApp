/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomButton from './AppButton/CustomButton';
import { CustomInput } from './AppInputText/CustomInput';
import useTheme from './CustomHook/useTheme';
import CustomText from './AppText/CustomText';
import CustomHeader from './AppHeader/CustomHeader';
import CustomHomeHeader from './AppHeader/CustomHomeHeader';
import CustomStatusBar from './AppStatuBar/CustomStatusBar';
import CustomLightModal from './AppPopUp/CustomLightModal';
import CustomDarkModal from './AppPopUp/CustomDarkModal';
import CustomLoader from './AppLoader/CustomLoader';
type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): JSX.Element {
  const { isDarkMode, colorScheme, toggle } = useTheme(false);
  const onPress = () => {
    toggle();
  }

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }
  return (
    <View style={[styles.container, { backgroundColor: colorScheme.background }]}>
      <CustomStatusBar statusColor={colorScheme.background} statusStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CustomHomeHeader avatar={require('./assets/avatar.png')} title='Header title' textStyle={{ color: colorScheme.onBackground }}
        headerStyle={{ backgroundColor: colorScheme.background }} iconStyle={{ tintColor: colorScheme.onBackground }} />
      <CustomText children='Hello World' type='h1' style={{ color: colorScheme.onBackground, fontFamily: 'Montserrat-SemiBold', textAlign: 'center' }} />
      <CustomInput placeholderTextColor={colorScheme.onBackground} title='Name' borderColor={colorScheme.onBackground}
        customTextStyle={{ color: colorScheme.onBackground }} customTextInputStyle={{ color: colorScheme.onBackground }} />
      <CustomButton onPress={onPress} title='Change theme' type='outline' buttonStyle={{ alignSelf: 'center', backgroundColor: colorScheme.background, marginTop: 10 }}
        textStyle={{ color: colorScheme.onBackground }} />
      <CustomButton onPress={openModal} title='Open modal' type='solid' buttonStyle={{ alignSelf: 'center', marginTop: 10 }}
        textStyle={{ color: colorScheme.onBackground }} />
      <CustomLightModal isVisible={modalVisible} title='This is title' content='This is content' firstBtnTitle='Exit' secondBtnTitle='Ok' firstBtnOnPress={closeModal}
        secondBtnOnPress={() => console.log('ok')} />
      <CustomLoader visible={false} loaderColor={colorScheme.onBackground} style={{ backgroundColor: colorScheme.background }} />

      {!isDarkMode ? <CustomLightModal isVisible={modalVisible} title='This is title' content='This is content' firstBtnTitle='Exit' secondBtnTitle='Ok' firstBtnOnPress={closeModal}
        secondBtnOnPress={() => console.log('ok')} /> : <CustomDarkModal isVisible={modalVisible} title='This is title' content='This is content' firstBtnTitle='Exit' secondBtnTitle='Ok' firstBtnOnPress={closeModal}
          secondBtnOnPress={() => console.log('ok')} />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%'
  }
});

export default App;
