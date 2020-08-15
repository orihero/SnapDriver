import React from 'react';
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
    isButtonVisible: boolean;
}

let MainScreenView = (
    {
        showTariff,
        setShowTariff,
        goToChat,
        changeDriverStatus,
        driverStatus,
        isButtonVisible,
    }: IProps
) => {
    return (
        <>
            <NewOrderScreen/>
            <View style={{flex: 1}}>
                <Map/>
                <MapHeader
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
                        {
                            isButtonVisible &&
                            <Button
                                containerStyle={styles.button}
                                textStyles={styles.buttonText}
                                onPress={changeDriverStatus}
                                text={strings.goShift}
                            />
                        }
                    </View>
                </View>
            </View>
        </>
    );
};

export default MainScreenView;
