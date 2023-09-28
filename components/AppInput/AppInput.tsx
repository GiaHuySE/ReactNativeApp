import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextInput,
  ImageProps,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AppText} from '../AppText';
import {useTheme} from '../Context';

interface TextInputCustomProps extends TextInputProps {
  title: string;
  icon: ImageProps['source'];
  txtInputStyle?: StyleProp<ViewStyle>;
  iconPress?: () => void;
}

export const AppInput: React.FC<TextInputCustomProps> = ({
  title,
  icon,
  txtInputStyle,
  iconPress,
  ...rest
}) => {
  const theme = useTheme();
  const $themeStyle: ViewStyle = {
    borderColor: theme.colorScheme.onBackground,
  };
  return (
    <View style={styles.contain}>
      <AppText type="inputTitle" children={title} />
      <View
        style={[
          {
            borderWidth: 1,
            borderRadius: 10,
            padding: 5,
            marginTop: 5,
            flexDirection: 'row',
          },
          $themeStyle,
          txtInputStyle,
        ]}>
        <TextInput
          placeholder="PlaceHolder.."
          style={[{flex: 1}, {color: theme.colorScheme.onBackground}]}
          {...rest}
          placeholderTextColor={theme.colorScheme.onBackground}
        />
        <TouchableOpacity
          style={{justifyContent: 'center', paddingRight: 10}}
          onPress={iconPress}>
          <Image
            source={icon}
            style={{tintColor: theme.colorScheme.onBackground}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
});
