import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  TextProps,
  ImageProps,
} from 'react-native';
import React from 'react';
import {useTheme} from '../Context';
import {AppText} from '../AppText';

interface HeaderCustomProps extends TextProps {
  title: string;
  icon: ImageProps['source'];
  isHiddenImage?: boolean;
  onPress?: () => void;
}

export const AppHeader: React.FC<HeaderCustomProps> = ({
  title,
  icon,
  isHiddenImage = false,
  onPress,
}) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.colorScheme.background},
      ]}>
      <View style={styles.header}>
        <View style={{flex: 0.03}}>
          {isHiddenImage ? null : (
            <TouchableOpacity
              style={{alignItems: 'center', paddingLeft: 20}}
              onPress={onPress}>
              <Image
                source={icon}
                style={[
                  {tintColor: theme.colorScheme.onBackground, marginLeft: 0},
                ]}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <AppText
            type="h3"
            children={title}
            style={{color: theme.colorScheme.onBackground, textAlign: 'center'}}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '7%',
    elevation: 3,
  },
  header: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
});
