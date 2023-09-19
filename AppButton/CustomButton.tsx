import { View, Text, StyleProp, ViewStyle, TouchableOpacity, StyleSheet, ButtonProps, TextStyle } from 'react-native'
import CustomText from '../AppText/CustomText';


interface ButtonCustomProps extends ButtonProps {
  title: string,
  buttonStyle?: StyleProp<ViewStyle>,
  type?: "clear" | "solid" | "outline";
  textStyle?: TextStyle;
  isDisable?: boolean
  onPress?: () => void
}

const CustomButton: React.FC<ButtonCustomProps> = ({ title, buttonStyle, type, textStyle, isDisable = false, onPress, ...rest }) => {
  const buttonStyles = [
    type === 'clear' && styles.clear,
    type === 'outline' && styles.outliner,
    type === 'solid' && styles.solid,
    isDisable && styles.disabled,
    buttonStyle,
  ];

  return (
    <TouchableOpacity disabled={isDisable} style={[buttonStyles]} {...rest} onPress={onPress}>
      <CustomText type='button' children={title} style={textStyle} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  clear: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    color: "#0071F7"
  },
  solid: {
    elevation: 8,
    backgroundColor: "#0071F7",
    borderRadius: 5,
    paddingVertical: 10,
    width: 200,
    alignItems: 'center'
  },
  outliner: {
    elevation: 8,
    backgroundColor: "#FFFFFF",
    borderColor: '#0071F7',
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 10,
    width: 200,
    alignItems: 'center',
    color: "#0071F7"
  },
  disabled: {
    backgroundColor: 'lightgray',
    opacity: 0.7,
  },
})

export default CustomButton