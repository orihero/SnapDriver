import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Map from '../Map';

import MapHeader from '@components/navigation/MapHeader';
import colors from '@constants/colors';
import strings from '@constants/strings';
import MessageCard from '@components/cards/MessageCard';
import images from '@assets/images';
import Button from '@components/common/Button';
import TariffCard from '@components/cards/TariffCard';
import styles from "./styles";
import NewOrderScreen from "../NewOrderScreen";

interface IProps {
    goToChat: () => void;
    showTariff: boolean;
    setShowTariff: (value: (prevState: any) => boolean) => void;
    changeDriverStatus: () => void;
    driverStatus: boolean;
    isModalVisible: boolean;
    isNetConnected: boolean;
    rates: any;
}

let MainScreenView = (
    {
        showTariff,
        setShowTariff,
        goToChat,
        changeDriverStatus,
        driverStatus,
        isModalVisible,
        isNetConnected,
        rates
    }: IProps
) => {

    const [buttonStyles, setButtonStyles] = useState(styles.button);

    useEffect(() => {
        if (!isNetConnected) {
            setButtonStyles(prevState => ({
                ...prevState,
                backgroundColor: 'red'
            }))
        } else {
            setButtonStyles(styles.button)
        }

    }, [isNetConnected]);

    return (
        <>
            {isModalVisible && <NewOrderScreen/>}
            <View style={{flex: 1}}>
                <Map/>
                <MapHeader
                    isNetConnected={isNetConnected}
                    gradientBack={[colors.white, colors.transparent]}
                    title={driverStatus && isNetConnected ? 'На смене' : strings.noAccess}
                />
                <View style={styles.content}>
                    <View style={styles.messageWrapper}>
                        <MessageCard
                            onPress={() => setShowTariff((prevState) => !prevState)}
                            image={images.taxi}
                            title={strings.myTariff}
                        />
                        <MessageCard
                            onPress={goToChat}
                            image={images.chat}
                            title={strings.message}
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <View style={[styles.tariffWrapper, showTariff && styles.activeTariff]}>
                            {
                                rates.map((rate: any) => (
                                    <TariffCard
                                        name={rate.title}
                                        minPrice={rate.min_price}
                                        active={false}
                                    />
                                ))
                            }

                        </View>
                        {
                            !isModalVisible &&
                            <Button
                                disabled={!isNetConnected}
                                containerStyle={buttonStyles}
                                textStyles={styles.buttonText}
                                onPress={changeDriverStatus}
                                text={driverStatus ? strings.exitShift : strings.goShift}
                            />
                        }
                    </View>
                </View>
            </View>
        </>
    );
};

export default MainScreenView;
