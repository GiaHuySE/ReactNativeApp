import {View, Text, Modal, StyleSheet, ModalProps} from 'react-native';
import React from 'react';
import {AppButton} from '../AppButton/AppButton';
import {AppText} from '../AppText';
import {useTheme} from '../Context';

interface CustomModalProps extends ModalProps {
  title: string;
  content: string;
  firstBtnTitle: string;
  secondBtnTitle: string;
  firstBtnOnPress?: () => void;
  secondBtnOnPress?: () => void;
}

export const AppPopUp: React.FC<CustomModalProps> = ({
  title,
  content,
  firstBtnTitle,
  secondBtnTitle,
  firstBtnOnPress,
  secondBtnOnPress,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Modal transparent {...rest}>
      <View style={styles.modalBackGround}>
        <View
          style={[
            styles.modalContainer,
            {backgroundColor: theme.colorScheme.background},
          ]}>
          <AppText
            type="h4"
            children={title}
            style={{paddingTop: 10, paddingLeft: 20, paddingRight: 20}}
          />
          <AppText
            type="subTitle2"
            children={content}
            style={{paddingTop: 5, paddingLeft: 20}}
          />
          <View style={styles.btnContain}>
            <AppButton
              title={firstBtnTitle}
              type="clear"
              buttonStyle={styles.btn}
              onPress={firstBtnOnPress}
            />
            <AppButton
              title={secondBtnTitle}
              type="solid"
              buttonStyle={styles.btn}
              onPress={secondBtnOnPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    flexDirection: 'column',
    margin: 20,
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
    color: '#151414',
  },
  modalContent: {
    paddingTop: 10,
    paddingLeft: 20,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '400',
    color: '#151414',
  },
  btnContain: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    marginVertical: 10,
  },
  btn: {
    width: '30%',
    marginHorizontal: 10,
    paddingVertical: '6%',
  },
});
