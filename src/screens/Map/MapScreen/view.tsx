import React, {useEffect, useState, useRef} from 'react';
import {View, StatusBar, StyleSheet, LayoutAnimation} from 'react-native';
import Map from '../Map';
import Header1 from '@components/navigation/Header1';
import colors from '@constants/colors';
import strings from '@constants/strings';
import MessageCard from '@components/cards/MessageCard';
import images from '@assets/images';
import Button from '@components/common/Button';
import NotificationsScreen from '../NotificationsScreen';
import TariffCard from '@components/cards/TariffCard';
import styles from "./styles";
import SCREENS from "@constants/screens";
import {StackNavigationProp} from "@react-navigation/stack";

interface MapPageProps {
    navigation: StackNavigationProp<any>;
}

let MapScreenView = ({navigation}: MapPageProps) => {
    //functions
    const onTaxiPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowTariff(!showTariff);
    };

    const onChatPress = () => {
        navigation.navigate(SCREENS.CHAT);
    };

    const onCountDownPress = () => {
        console.warn('countDownPressed');
    };
    const onPress = () => {
        setShowNotification(true);
    };

    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.white);
    }, [navigation]);

    let mapRef = useRef();

    let [showNotification, setShowNotification] = useState(false);
    let [showTariff, setShowTariff] = useState(false);

    return (
        <View style={{flex: 1}}>
            <Map ref={mapRef}/>
            {/*<NotificationsScreen*/}
            {/*    setShowNotification={setShowNotification}*/}
            {/*    navigation={navigation}*/}
            {/*    onCountDownPress={onCountDownPress}*/}
            {/*/>*/}
            <Header1
                navigation={navigation}
                menu
                gradientBack={[colors.white, colors.transparent]}
                titleColor={colors.black}
                title={strings.noAccess + '(1)'}
            />
            <View style={styles.content}>
                <View style={styles.messageWrapper}>
                    <MessageCard
                        onPress={onTaxiPress}
                        navigation={navigation}
                        image={images.taxi}
                        title={strings.myTariff || ''}
                    />
                    <MessageCard
                        onPress={onChatPress}
                        navigation={navigation}
                        image={images.chat}
                        title={strings.message || ''}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <View/>
                    <View
                        style={[
                            styles.tariffWrapper,
                            showTariff && {
                                left: -40,
                            },
                        ]}>
                        <TariffCard
                            setShowTariff={setShowTariff}
                            name="Эконом от"
                            minPrice={4000}
                        />
                        <TariffCard
                            textColor={colors.paleGray}
                            name="Комфорт от"
                            minPrice={4000}
                            backColor={colors.blueish}
                            setShowTariff={setShowTariff}
                        />
                    </View>
                    <Button
                        fontSize={16}
                        onPress={onPress}
                        text={strings.goShift}
                    />
                </View>
            </View>
        </View>
    );
};

export default MapScreenView;
