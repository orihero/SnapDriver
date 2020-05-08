import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, StyleSheet, LayoutAnimation} from 'react-native';
import Map from './Map';
import {NavigationScreenProp} from 'react-navigation';
import Header from '../../components/navigation/Header';
import colors from '../../constants/colors';
import strings from '../../locales/strings';
import MessageCard from '../../components/cards/MessageCard';
import images from '../../assets/images';
import RectangleButton from '../../components/common/RectangleButton';
import {
    BUTTON_MARGIN_BOTTOM,
    CONTAINER_PADDING,
    BIG_BORDER_RADIUS,
} from '../../constants/values';
import Notification from './Notification';
import constStyles from '../../constants/constStyles';
import Modal from '../../components/container/Modal';
import TariffCard from '../../components/cards/TariffCard';

interface MapPageProps {
    navigation: NavigationScreenProp<{}>;
}

const MapPage = ({navigation}: MapPageProps) => {
    //functions
    const onTaxiPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowTariff(!showTariff);
    };

    const onChatPress = () => {
        navigation.navigate('Chat');
    };

    const onCountDownPress = () => {
        console.warn('countDownPressed');
    };
    const onPress = () => {
        setShowNotification(true);
    };

    // useEffect(() => {
    //     StatusBar.setBarStyle('dark-content');
    //     StatusBar.setBackgroundColor(colors.white);
    // }, [navigation]);

    //variables
    let [showNotification, setShowNotification] = useState(false);
    let [showTariff, setShowTariff] = useState(false);
    return (
        <View style={{flex: 1}}>
            <Map />
            {showNotification ? (
                <Notification
                    onCountDownPress={onCountDownPress}
                    setShowNotification={setShowNotification}
                    navigation={navigation}
                />
            ) : (
                <>
                    <Header
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
                                key={1}
                            />
                            <MessageCard
                                key={2}
                                onPress={onChatPress}
                                navigation={navigation}
                                image={images.chat}
                                title={strings.message || ''}
                            />
                        </View>
                        <View style={styles.buttonWrapper}>
                            <View />
                            <View
                                style={[
                                    styles.tariffWrapper,
                                    showTariff && {
                                        right: -220,
                                    },
                                ]}>
                                <TariffCard
                                    setShowTariff={setShowTariff}
                                    name="Эконом от"
                                    minPrice={4000}
                                />
                                <TariffCard
                                    textColor={colors.white}
                                    name="Комфорт от"
                                    minPrice={4000}
                                    backColor={colors.blue}
                                    setShowTariff={setShowTariff}
                                />
                            </View>
                            <RectangleButton
                                fontSize={16}
                                fontWeight={constStyles.bold}
                                onPress={onPress}
                                borderRadius={70}
                                text={strings.goShift}
                                textColor={colors.black}
                                backColor={colors.yellow}
                            />
                        </View>
                    </View>
                </>
            )}
            {/* 
            <Modal navigation={navigation} isOpen={true}>
                <Text>some</Text>
            </Modal> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: CONTAINER_PADDING,
        flex: 1,
        justifyContent: 'space-between',
    },

    messageWrapper: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginBottom: BUTTON_MARGIN_BOTTOM,
    },
    tariffWrapper: {
        marginTop: 200,
        right: -1000,
    },
});

export default MapPage;
