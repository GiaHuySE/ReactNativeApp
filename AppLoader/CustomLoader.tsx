import { View, Text, ActivityIndicator, StyleSheet, Modal, ActivityIndicatorProps } from 'react-native'
import React from 'react'

interface CustomLoaderProps extends ActivityIndicatorProps {
    visible: boolean;
    loaderColor: string,
}

const CustomLoader: React.FC<CustomLoaderProps> = ({ visible, loaderColor }) => {
    return (
        <Modal transparent animationType="none" visible={visible}>
            <View style={styles.loaderBackGround}>
                <View style={styles.loaderContainer}>
                    <ActivityIndicator color={loaderColor} size="large" />
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
export default CustomLoader