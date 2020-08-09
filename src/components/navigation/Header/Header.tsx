import React, {useEffect} from 'react';
import {StatusBar, Text, TouchableNativeFeedback, View, ViewStyle, Animated} from "react-native"
import styles from "./styles";

import Colors from "@constants/colors";
import {useNavigation} from "@react-navigation/native";
import Icon from "@assets/icons";
import TouchablePlatformSpecific from "@components/common/TouchablePlatformSpecific";

interface IProps {
    title: any
    style?: ViewStyle
}

const Header = ({title, style}: IProps) => {
    const navigation = useNavigation();
    useEffect(() => {
        return navigation.addListener('focus', () => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor(Colors.blue);
        })
    }, [navigation]);

    return (
        <>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={Colors.blue}
                animated={true}
            />
            <Animated.View style={[styles.container, style]}>
                <View style={[styles.header]}>
                    <TouchablePlatformSpecific
                        onPress={() => navigation.goBack()}
                        background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.1)', true)}
                    >
                        <View style={styles.backButton}>
                            <Icon name="arrowLeft" size={14}/>
                        </View>
                    </TouchablePlatformSpecific>

                    <Text style={styles.title}>{title}</Text>
                </View>
            </Animated.View>
        </>
    );
};


export default Header;
