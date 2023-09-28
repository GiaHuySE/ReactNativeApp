import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import {AppStatusBar} from '../AppStatusBar';
import {AppText} from '../AppText';
import AppPassCode from '../AppPassCode/AppPassCode';
import AppNumberKey from '../AppPassCode/AppNumberKey';
const {width, height} = Dimensions.get('window');

export const LockPassCode = () => {
  const shakeAnimation = new Animated.Value(0);
  const [password, setPassword] = useState<string[]>(['', '', '', '']);
  const [confirmPassword, setConfirmPassword] = useState<string[]>([
    '',
    '',
    '',
    '',
  ]);
  const [isConfirmMode, setIsConfirmMode] = useState(false);
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'space', 0, 'delete'];

  const onPressNumber = (num: string) => {
    if (!isConfirmMode) {
      const tempCode = [...password];
      for (let i = 0; i < tempCode.length; i++) {
        if (tempCode[i] === '') {
          tempCode[i] = num;
          setPassword(tempCode);
          if (i === 3) {
            setIsConfirmMode(true);
          }
          break;
        }
      }
    } else {
      const tempCode = [...confirmPassword];
      for (let i = 0; i < tempCode.length; i++) {
        if (tempCode[i] === '') {
          tempCode[i] = num;
          setConfirmPassword(tempCode);
          if (i === 3) {
            if (tempCode.join('') === password.join('')) {
              console.log('Passcode confirmed:', tempCode.join(''));
              setPassword(['', '', '', '']);
              setConfirmPassword(['', '', '', '']);
              setIsConfirmMode(false);
            } else {
              console.error('Passcode does not match');
              shakePasscodeContainer();
              setPassword(['', '', '', '']);
              setConfirmPassword(['', '', '', '']);
              setIsConfirmMode(false);
            }
          }
          break;
        }
      }
    }
  };

  const onPressDelete = () => {
    const tempCode = [...password];
    for (let i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] !== '') {
        tempCode[i] = '';
        break;
      }
    }
    setPassword(tempCode);
  };

  const shakePasscodeContainer = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <AppStatusBar />
      <ImageBackground
        source={require('App/assets/imageBackGround.png')}
        style={{position: 'absolute', top: 0, width: width, height: height}}
        blurRadius={40}
      />
      <View style={styles.swipe}>
        {!isConfirmMode ? (
          <AppText
            type="h4"
            children="Set up your new passcode"
            style={{
              fontSize: 17,
              letterSpacing: -0.41,
              lineHeight: 22,
              color: 'white',
            }}
          />
        ) : (
          <AppText
            type="h4"
            children="Confirm your passcode"
            style={{
              fontSize: 17,
              letterSpacing: -0.41,
              lineHeight: 22,
              color: 'white',
            }}
          />
        )}
        <View
          style={{
            marginTop: 75,
            width: '35%',
          }}>
          <View style={styles.codeContainer}>
            {password.map((p, index) => {
              let style = p !== '' ? styles.codeChagne : styles.code;
              return <AppPassCode style={style} key={index} />;
            })}
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.numberContainer}>
          {keys.map((key, index) => {
            if (key === 'space') {
              return (
                <View
                  key={key}
                  style={{
                    width: 75,
                    height: 75,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                  }}
                />
              );
            } else if (key === 'delete') {
              return (
                <TouchableOpacity
                  key="delete"
                  style={{
                    width: 75,
                    height: 75,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                  }}
                  onPress={() => onPressDelete()}>
                  <Image source={require('App/assets/removeIcon.png')} />
                </TouchableOpacity>
              );
            }
            return (
              <AppNumberKey
                key={key}
                title={key}
                onPress={() => onPressNumber(key as string)}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  swipe: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    transform: [
      {
        translateX: 0, // Apply the shake animation
      },
    ],
  },
  code: {
    width: 13,
    height: 13,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#0071F7',
  },
  codeChagne: {
    width: 13,
    height: 13,
    borderRadius: 13,
    borderWidth: 1,
    backgroundColor: '#0071F7',
  },
  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 58,
    width: 282,
    height: 348,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    width: 75,
    height: 75,
    borderRadius: 75,
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
});
