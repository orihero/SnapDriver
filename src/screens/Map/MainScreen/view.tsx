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
    }: IProps
) => {

    const [buttonStyles, setButtonStyles] = useState(styles.button);

    useEffect(()=> {
        if  (!isNetConnected) {
            setButtonStyles(prevState => ({
                ...prevState,
                backgroundColor: 'red'
            }))
        }else {
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
                    title={driverStatus ? 'На смене' : strings.noAccess + '  (1)'}
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
                        <View/>
                        <View style={[styles.tariffWrapper, showTariff && styles.activeTariff]}>
                            <TariffCard
                                name="Эконом от"
                                minPrice={4000}
                                active={false}
                            />
                            <TariffCard
                                name="Комфорт от"
                                minPrice={4000}
                                active={true}
                            />
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
