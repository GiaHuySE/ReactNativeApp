import { View, Text, Modal, StyleSheet, ActivityIndicator, ActivityIndicatorProps, ModalProps } from 'react-native'
import React from 'react'
import { useTheme } from '../Context';



export const AppLoader:React.FC<ModalProps> = ({...rest}) => {
  const theme = useTheme();
  return (
    <Modal transparent animationType="none" {...rest}>
        <View style={styles.loaderBackGround}>
            <View style={[styles.loaderContainer,{backgroundColor:theme.colorScheme.background}]}>
                <ActivityIndicator  color={theme.colorScheme.onBackground} size="large"  /> 
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    loaderBackGround: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    loaderContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})

