import React from 'react';
import {Image, Text, View} from "react-native";
import HatCutout from "@components/common/HatCutout";
import colors from "@constants/colors";
import images from "@assets/images";
import strings from "@constants/strings";
import Icon from "@assets/icons";
import styles from "./styles";
import Button from "@components/common/Button";

interface IProps {
    changeOrderStatus: () => void;
    isLoading: boolean;
    drivingFrom: string;
    drivingTo: string;
}

const DestinationDetailsPanelView = ({changeOrderStatus, isLoading, drivingFrom, drivingTo}: IProps) => {
    return (
        <View>
            <HatCutout style={styles.hatCutOut}/>
            <View style={styles.wrapper}>
                <View style={styles.dragIcon}/>
                <View style={styles.innerWrapper}>
                    <View style={{paddingTop: 5}}>
                        <Image source={images.locationBorder} style={styles.img}/>
                    </View>
                    <View>
                        <View style={styles.drivingFromWrapper}>
                            <Text style={styles.drivingText}>{strings.drivingFrom}</Text>
                            <Text style={styles.text}>{drivingFrom}</Text>
                        </View>
                        <View style={styles.drivingToWrapper}>
                            <Text style={styles.drivingText}>{strings.drivingTo}</Text>
                            <Text style={styles.text}>{drivingTo}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.optionsWrapper}>
                    <View style={styles.optionWrapper}>
                        <Icon name="airCondition" color={colors.blue} size={25}/>
                        <Text style={[styles.optionText]}>{strings.airConditioner}</Text>
                        <Icon name="checkCircle" color={colors.blue} size={25}/>
                    </View>
                    <View style={styles.optionWrapper}>
                        <Icon name="smoke" color={colors.black} size={25}/>
                        <Text style={styles.optionText}>{strings.carForSmokers}</Text>
                        <Icon name="checkCircle" color={colors.blue} size={25}/>
                    </View>
                </View>
                <View style={styles.bottomWrapper}>
                    <View style={styles.bottomIconWrapper}>
                        <Icon name="path" size={25} color={colors.black}/>
                    </View>
                    <View style={styles.bottomIconWrapper}>
                        <Icon name="chat" size={25} color={colors.blue}/>
                    </View>
                    <View style={styles.bottomIconWrapper}>
                        <Icon name="noCar" size={25} color={colors.black}/>
                    </View>
                </View>
                <Button
                    onPress={changeOrderStatus}
                    text={strings.letsGo}
                    isLoading={isLoading}
                />
            </View>
        </View>
    );
};

export default DestinationDetailsPanelView;
