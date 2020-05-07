import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard,
} from 'react-native';
import Icon from '../../assets/icons';
import constStyle from '../../constants/constStyles';
import colors from '../../constants/colors';
import {CONTAINER_PADDING, BUTTON_MARGIN_BOTTOM} from '../../constants/values';
import strings from '../../locales/strings';
import SelectAndInputCard from '../../components/cards/SelectAndInputCard';
import SelectOrInputCard from '../../components/cards/SelectOrInputCard';
import RectangleButton from '../../components/common/RectangleButton';

interface EnterCodeProps {
    navigation: any;
}

const EnterCode = ({navigation}: EnterCodeProps) => {
    //variables
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    //functions
    const onPress = () => {
        navigation.navigate('RegisterDriver');
    };
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(colors.blue);
    }, [navigation]);

    let [inputScreen, setInputScreen] = useState(false);
    return (
        <KeyboardAvoidingView style={styles.container}>
            {!inputScreen && (
                <View style={styles.titleWrapper}>
                    <Text style={[constStyle.semibold, styles.firstTitle]}>
                        {strings.weAreHappyYouAreHere}
                    </Text>
                    <Text style={[constStyle.bold, styles.secondTitle]}>
                        {strings.letsRegister}
                    </Text>
                </View>
            )}
            <View style={[styles.cardWrapper, inputScreen && {paddingTop: 30}]}>
                <SelectAndInputCard
                    setInputScreen={setInputScreen}
                    title={strings.yourPhoneNumber || ''}
                    icon="smartphone"
                    value="+998"
                    isInputNumber={true}
                    placeholder={strings.enterYourNumber || ''}
                />
                {inputScreen && (
                    <SelectOrInputCard
                        title={strings.enterYourPassword || ''}
                        icon="passwordChecked"
                        placeholder={strings.enterYourPassword || ''}
                        isPassword
                    />
                )}
            </View>
            {!inputScreen && (
                <View style={styles.footerWrapper}>
                    <Text style={[constStyle.medium, styles.firstFooter]}>
                        {strings.privacyPoliceFirst}
                    </Text>
                    <Text style={[constStyle.bold, styles.secondFooter]}>
                        {strings.privacyPoliceSecond}
                    </Text>
                </View>
            )}
            {!isKeyboardVisible && (
                <View style={styles.submitButton}>
                    <RectangleButton
                        textColor={colors.black}
                        text={strings.send}
                        backColor={colors.yellow}
                        onPress={onPress}
                    />
                </View>
            )}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: CONTAINER_PADDING,
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: 'space-between',
    },
    titleWrapper: {
        padding: 18,
        paddingTop: 30,
        justifyContent: 'center',
    },
    firstTitle: {
        fontSize: 14,
    },
    secondTitle: {
        fontSize: 20,
    },
    cardWrapper: {
        paddingBottom: 20,
        paddingTop: 20,
    },
    footerWrapper: {},
    firstFooter: {
        textAlign: 'center',
        fontSize: 13,
        color: colors.darkGrayText,
    },
    secondFooter: {
        textAlign: 'center',
        fontSize: 14,
        color: colors.darkGrayText,
    },
    submitButton: {
        marginTop: 20,
        marginBottom: BUTTON_MARGIN_BOTTOM,
    },
});

export default EnterCode;
