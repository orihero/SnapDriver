import React, {useEffect, useState, useRef} from 'react';
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
import {TouchableOpacity} from 'react-native-gesture-handler';

interface MapPageProps {
    navigation: NavigationScreenProp<{}>;
}

let MapPage = ({navigation}: MapPageProps) => {
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

    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.white);
    }, [navigation]);

    let mapRef = useRef();

    //variables
    let [showNotification, setShowNotification] = useState(false);
    let [showTariff, setShowTariff] = useState(false);
    return (
        <View style={{flex: 1}}>
            <Map ref={mapRef} />
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
                            />
                            <MessageCard
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
        position: 'absolute',
        marginTop: 200,
        left: -1000,
    },
});

export default MapPage;
