import {
  View,
  TextStyle,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {AppText} from '../AppText';

interface ButtonCustomProps extends TouchableOpacityProps {
  title: string;
  type?: keyof typeof styles;
  buttonStyle?: StyleProp<ViewStyle>;
}

export const AppButton: React.FC<ButtonCustomProps> = ({
  title,
  type = 'solid',
  buttonStyle: $overrideStyle,
  ...rest
}) => {
  const isDisableStyle: StyleProp<ViewStyle> = {
    opacity: 0.4,
  };

  const $disableStyle: StyleProp<ViewStyle> = {
    opacity: 0.4,
    backgroundColor: '#A0ADBC',
  };

  return (
    <TouchableOpacity
      style={[
        styles[type],
        $overrideStyle,
        {justifyContent: 'center'},
        ,
        rest.disabled ? $disableStyle : {},
      ]}
      {...rest}>
      <AppText
        type="menu"
        children={title}
        style={{color: type === 'solid' ? 'white' : '#0071F7'}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clear: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    color: '#0071F7',
  },
  solid: {
    elevation: 8,
    backgroundColor: '#0071F7',
    borderRadius: 5,
    paddingVertical: 10,
    width: '70%',
    alignItems: 'center',
  },
  outliner: {
    elevation: 8,
    backgroundColor: '#FFFFFF',
    borderColor: '#0071F7',
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 10,
    width: '70%',
    alignItems: 'center',
    color: '#0071F7',
  },
});
