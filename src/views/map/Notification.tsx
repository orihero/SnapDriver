import React, {useState} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import constStyles from '../../constants/constStyles';
import {
    BIG_BORDER_RADIUS,
    CONTAINER_PADDING,
    BUTTON_MARGIN_BOTTOM,
} from '../../constants/values';
import strings from '../../locales/strings';
import PulseCountDown from '../../components/common/PulseCountDown';
import colors from '../../constants/colors';
import InfoCard from '../../components/cards/InfoCard';
import images from '../../assets/images';
import RectangleButton from '../../components/common/RectangleButton';
import CountDownButton from '../../components/common/CountDownButton';
import {NavigationScreenProp} from 'react-navigation';

interface NotificationProps {
    onCountDownPress?: any;
    setShowNotification: any;
    navigation: NavigationScreenProp<{}>;
}

const Notification = ({
    onCountDownPress,
    setShowNotification,
    navigation,
}: NotificationProps) => {
    //fucntions
    const onCountDownButtonPress = () => {
        navigation.navigate('Passanger');
        setShowNotification(false);
    };
    //variables
    let [showDetails, setShowDetails] = useState(false);
    return (
        <View
            style={[
                styles.plane,
                showDetails && {
                    justifyContent: 'space-between',
                },
            ]}>
            <View />
            <View
                style={[
                    styles.contianer,
                    constStyles.shadow,
                    showDetails && {
                        paddingBottom: BUTTON_MARGIN_BOTTOM,
                    },
                ]}>
                {!showDetails && (
                    <PulseCountDown
                        name={strings.skip || ''}
                        title={strings.order || ''}
                        time={8}
                        // onPress={onCountDownPress}
                        setShowNotification={setShowNotification}
                    />
                )}
                <View
                    style={[
                        styles.section,
                        styles.bottomBorder,
                        showDetails && {
                            paddingTop: 30,
                        },
                    ]}>
                    <View style={styles.left}>
                        <Text style={[styles.price, constStyles.bold]}>
                            35 500
                        </Text>
                        <Text style={[styles.text, constStyles.light]}>
                            Комиссия:3 550
                        </Text>
                    </View>
                    <Text style={[styles.distance, constStyles.medium]}>
                        13 км
                    </Text>
                </View>
                <View style={[styles.rowWrapper, styles.bottomBorder]}>
                    <Image style={styles.location} source={images.location} />
                    <View style={styles.row}>
                        <Text style={[styles.text, constStyles.light]}>
                            {strings.drivingFrom}
                        </Text>
                        <Text style={[styles.locationText, constStyles.bold]}>
                            Саларская набережаная 35
                        </Text>
                    </View>
                </View>
                <View style={styles.tariffWrapper}>
                    <Text style={[styles.tariffTitle, constStyles.light]}>
                        {strings.tariff}:
                    </Text>
                    <Text style={[styles.tariff, constStyles.bold]}>
                        {' '}
                        Comfort
                    </Text>
                </View>
                <InfoCard message="Поедет моя мама, просит не торопиться, так как очень боится скорости" />
                {showDetails && (
                    <CountDownButton
                        style={styles.countButton}
                        backColor={colors.green}
                        text={strings.pressToAccept || ''}
                        textColor={colors.white}
                        countDownBackColor={colors.darkGreen}
                        time={30}
                        onPress={onCountDownButtonPress}
                        setShowDetails={setShowDetails}
                        setShowNotification={setShowNotification}
                    />
                )}
            </View>
            {!showDetails && (
                <View style={styles.buttonWrapper}>
                    <View style={{}} />
                    <RectangleButton
                        backColor={colors.yellow}
                        textColor={colors.black}
                        fontSize={18}
                        fontWeight={constStyles.bold}
                        text={strings.accept}
                        onPress={() => {
                            setShowDetails(true);
                        }}
                    />
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    plane: {
        flex: 1,
    },
    contianer: {
        paddingHorizontal: CONTAINER_PADDING,
        backgroundColor: colors.white,
        borderBottomRightRadius: BIG_BORDER_RADIUS,
        borderBottomLeftRadius: BIG_BORDER_RADIUS,
        paddingBottom: 20,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: colors.superPaleGray,
    },
    left: {},
    price: {
        fontSize: 23,
        color: colors.black,
    },
    text: {fontSize: 14},
    distance: {
        fontSize: 18,
        color: colors.darkGrayText,
    },
    rowWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {fontSize: 18},
    location: {
        height: 20,
        width: 14,
        resizeMode: 'contain',
    },
    row: {
        padding: 10,
    },
    tariffWrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    tariffTitle: {
        fontSize: 18,
    },
    tariff: {
        fontSize: 18,
        color: colors.blue,
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'space-between',
        margin: CONTAINER_PADDING,
    },
    countButton: {
        marginTop: 20,
    },
});

export default Notification;
