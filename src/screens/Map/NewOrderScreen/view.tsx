import React from 'react';
import {Text, Image, View, Modal} from 'react-native';
import constStyles from '@constants/constStyles';
import strings from '@constants/strings';
import PulseCountDown from '@components/common/PulseCountDown';
import InfoCard from '@components/cards/InfoCard';
import images from '@assets/images';
import Button from '@components/common/Button';
import styles from "./styles";
import IAction from "@store/types/IAction";

interface IProps {
    visible: boolean;
    skipNewOrder: IAction;
}

const NewOrderScreenView = ({visible, skipNewOrder}: IProps) => {

    return (
        <Modal presentationStyle={"fullScreen"} visible={visible}>
            <View style={[styles.plane]}>
                <View style={[styles.container, constStyles.shadow,]}>
                    <PulseCountDown
                        onPress={skipNewOrder}
                        name={strings.skip}
                        title={strings.order}
                        time={8}
                    />
                    <View
                        style={[styles.section, styles.bottomBorder]}>
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
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        fontSize={18}
                        text={strings.accept}
                        onPress={() => null}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default NewOrderScreenView;
