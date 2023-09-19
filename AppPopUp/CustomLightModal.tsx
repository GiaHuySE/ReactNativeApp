import { StyleSheet, Text, TextStyle, View, Modal, ModalProps, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import CustomText from '../AppText/CustomText'
import CustomButton from '../AppButton/CustomButton'

interface CustomModalProps extends ModalProps {
    isVisible: boolean
    title: string,
    content: string,
    firstBtnTitle: string,
    secondBtnTitle: string,
    firstBtnOnPress?: () => void,
    secondBtnOnPress?: () => void,
}

const CustomLightModal: React.FC<CustomModalProps> = ({
    isVisible = false,
    title,
    content,
    firstBtnTitle,
    secondBtnTitle,
    firstBtnOnPress,
    secondBtnOnPress }) => {
    return (
        <Modal transparent visible={isVisible}>
            <View style={styles.modalBackGround}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle} >{title}</Text>
                    <Text style={styles.modalContent}>{content}</Text>
                    <View style={styles.btnContain}>
                        <CustomButton title={firstBtnTitle} type='clear' buttonStyle={{ width: 150, height: 50, }} textStyle={{ color: '#0071F7' }} onPress={firstBtnOnPress} />
                        <CustomButton title={secondBtnTitle} type='solid' buttonStyle={{ width: 100, height: 50, right: 20 }} textStyle={{ color: 'white' }} onPress={secondBtnOnPress} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CustomLightModal

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        flexDirection: 'column',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        lineHeight: 40,
        fontFamily: 'Montserrat-Bold',
        color: '#151414'
    },
    modalContent: {
        paddingTop: 10,
        paddingLeft: 20,
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '400',
        color: '#151414'
    },
    btnContain: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 10
    }
})