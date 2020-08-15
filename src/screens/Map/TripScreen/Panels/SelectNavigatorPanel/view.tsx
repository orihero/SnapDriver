import React from 'react';
import {Image, Text, View} from "react-native";

import HatCutout from "@components/common/HatCutout";
import colors from "@constants/colors";
import strings from "@constants/strings";
import TouchablePlatformSpecific from "@components/common/TouchablePlatformSpecific";
import Icon from "@assets/icons";
import images from "@assets/images";
import styles from "./styles";
import Button from "@components/common/Button";

const SelectNavigatorPanelView = () => {

    return (
        <View>
            <HatCutout style={styles.hatCutOut}/>
            <View style={styles.wrapper}>
                <View style={styles.innerWrapper}>
                    <Text style={styles.selectNavigatorText}>{strings.selectCard}</Text>
                    <View style={styles.iconWrapper}>
                        <TouchablePlatformSpecific>
                            <View style={styles.icon}>
                                <Icon name="locationFancy" size={20} color={colors.blue}/>
                            </View>
                        </TouchablePlatformSpecific>
                    </View>
                </View>
                <View style={styles.locationIconWrapper}>
                    <Image style={styles.locationIcon} source={images.location}/>
                    <View style={styles.textWrapper}>
                        <Text style={styles.drivingFrom}>{strings.drivingFrom}</Text>
                        <Text style={styles.text}>Саларская набережаная 35</Text>
                    </View>
                </View>
                <Button
                    onPress={() => null}
                    text={strings.atPoint}
                />
            </View>
        </View>
    );
};

export default SelectNavigatorPanelView;
