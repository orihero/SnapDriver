import React, {useState} from 'react';
import {Text, Image, View} from 'react-native';
import constStyles from '@constants/constStyles';
import {
    BUTTON_MARGIN_BOTTOM,
} from '@constants/values';
import strings from '@constants/strings';
import PulseCountDown from '@components/common/PulseCountDown';
import InfoCard from '@components/cards/InfoCard';
import images from '@assets/images';
import Button from '@components/common/Button';
import styles from "./styles";

interface NotificationProps {
    onCountDownPress?: any;
    setShowNotification: any;
    navigation: any;
}

const NotificationsScreenView = ({onCountDownPress, setShowNotification, navigation}: NotificationProps) => {

    const onCountDownButtonPress = () => {
        navigation.navigate('Passanger');
        setShowNotification(false);
    };

    let [showDetails, setShowDetails] = useState(false);

    return (
        <View
            style={[styles.plane]}>
            <View/>
            <View
                style={[
                    styles.container,
                    constStyles.shadow,
                    showDetails && {
                        paddingBottom: BUTTON_MARGIN_BOTTOM,
                    },
                ]}>
                {/* {!showDetails && ( */}
                <PulseCountDown
                    name={strings.skip || ''}
                    title={strings.order || ''}
                    time={8}
                    // onPress={onCountDownPress}
                    setShowNotification={setShowNotification}
                />
                {/* )} */}
                <View
                    style={[
                        styles.section,
                        styles.bottomBorder,
                        // showDetails && {
                        //     paddingTop: 30,
                        // },
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
                    <Image style={styles.location} source={images.location}/>
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
                <InfoCard message="Поедет моя мама, просит не торопиться, так как очень боится скорости"/>
                {/* {showDetails && (
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
                )} */}
            </View>
            {/* {!showDetails && ( */}
            <View style={styles.buttonWrapper}>
                <View style={{}}/>
                <Button
                    fontSize={18}
                    text={strings.accept}
                    onPress={onCountDownButtonPress}
                />
            </View>
            {/* )} */}
        </View>
    );
};

export default NotificationsScreenView;
