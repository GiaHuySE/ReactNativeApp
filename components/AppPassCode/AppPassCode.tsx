import {
  View,
  Text,
  ViewProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface CustomPassCodeProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
}
const AppPassCode: React.FC<CustomPassCodeProps> = ({
  style: $overrideStyle,
  ...rest
}) => {
  return (
    <View
      style={[
        {
          width: 13,
          height: 13,
          borderRadius: 13,
          borderWidth: 1,
          borderColor: '#0071F7',
        },
        $overrideStyle,
      ]}
      {...rest}></View>
  );
};

export default AppPassCode;
