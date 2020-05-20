import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import colors from '../../constants/colors';
import Avatar from '../../components/common/Avatar';
import {CONTAINER_PADDING, BUTTON_MARGIN_BOTTOM} from '../../constants/values';
import InputCard from '../../components/cards/InputCard';
import strings from '../../locales/strings';
import SelectAndInputCard from '../../components/cards/SelectAndInputCard';
import SelectOrInputCard from '../../components/cards/SelectOrInputCard';
import RectangleButton from '../../components/common/RectangleButton';
import constStyle from '../../constants/constStyles';

interface RegisterDriverProps {
    navigation: any;
}

const RegisterDriver = ({navigation}: RegisterDriverProps) => {
    //functions
    const onPress = () => {
        navigation.navigate('AddDocuments');
    };
    let codeList = [
        {label: '90', value: '(90)'},
        {label: '91', value: '(91)'},
        {label: '93', value: '(93)'},
        {label: '94', value: '(94)'},
        {label: '97', value: '(97)'},
        {label: '98', value: '(98)'},
        {label: '99', value: '(99)'},
    ];

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: CONTAINER_PADDING,
                    justifyContent: 'space-between',
                }}>
                <View style={styles.profileWrapper}>
                    <Avatar style={styles.avatar} />
                    <View style={styles.verticalWrapper}>
                        <InputCard
                            title={strings.name || ''}
                            placeholder={strings.enterYourName || ''}
                        />
                        <InputCard
                            title={strings.familyName || ''}
                            placeholder={strings.enterYourFamilyName || ''}
                        />
                    </View>
                </View>
                <SelectAndInputCard
                    selectOptions={codeList}
                    titleVisible={true}
                    icon="smartphone"
                    selectValue="+998"
                    placeholder={strings.enterYourNumber || ''}
                    isInputNumber
                    title={strings.enterYourNumber || ''}
                />
                <SelectOrInputCard
                    icon="listPen"
                    title={strings.yourResidence || ''}
                    placeholder={strings.addressResidence || ''}
                />
                <SelectOrInputCard
                    isPassword
                    icon="passwordChecked"
                    title={strings.yourPassword || ''}
                    placeholder={strings.enterYourPassword || ''}
                />
                <View style={{flex: 1}} />
                <View style={styles.footerWrapper}>
                    <Text style={[constStyle.medium, styles.firstFooter]}>
                        {strings.privacyPoliceFirst}
                    </Text>
                    <TouchableOpacity>
                        <Text style={[constStyle.bold, styles.secondFooter]}>
                            {strings.privacyPoliceSecond}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* <View style={styles.footer}> */}
            {/*  */}
            <View style={styles.buttonWrapper}>
                <RectangleButton
                    onPress={onPress}
                    backColor={colors.yellow}
                    text={strings.further}
                    textColor={colors.black}
                />
            </View>
            {/* </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    profileWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
    },
    avatar: {
        padding: 5,
    },
    verticalWrapper: {
        paddingTop: 20,
        paddingLeft: 15,
    },
    footer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    footerWrapper: {
        paddingBottom: CONTAINER_PADDING,
    },
    firstFooter: {
        textAlign: 'center',
        fontSize: 13,
        color: colors.darkGrayText,
    },
    secondFooter: {
        textAlign: 'center',
        fontSize: 14,
        color: colors.blue,
    },
    buttonWrapper: {
        padding: CONTAINER_PADDING,
    },
});

export default RegisterDriver;
