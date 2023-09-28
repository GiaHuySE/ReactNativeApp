import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, {ReactNode} from 'react';
import {AppText} from '../AppText';

interface NumberKeyProps extends TouchableOpacityProps {
  title: ReactNode;
}

const AppNumberKey: React.FC<NumberKeyProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity
      style={{
        width: 75,
        height: 75,
        borderRadius: 75,
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
      }}
      {...rest}>
      <AppText
        type="button"
        children={title}
        style={{fontSize: 20, textAlign: 'center'}}
      />
    </TouchableOpacity>
  );
};

export default AppNumberKey;
