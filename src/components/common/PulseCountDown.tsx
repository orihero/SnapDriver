import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PulseLoader from '../lotties/PulseLoader';
import colors from '../../constants/colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Animated, {Easing} from 'react-native-reanimated';
import Touchable from './Touchable';
import CountDown from 'react-native-countdown-component';
import constStyles from '../../constants/constStyles';
import {deviceHeight} from '../../constants/values';

interface PulseCountDownProps {
    navigation?: any;
    time: number;
    title: string;
    name: string;
    setShowNotification: any;
}

const PulseCountDown = ({
    navigation,
    time,
    title,
    name,
    setShowNotification,
}: PulseCountDownProps) => {
    const progressCircle = useRef(null);
    const onPress = () => {
        // progressCircle.current.animate('100', time * 1000);
        setShowNotification(false);
    };

    useEffect(() => {
        progressCircle.current.animate('100', time * 1000);
    }, []);

    return (
        <View style={styles.container}>
            <PulseLoader />
            <AnimatedCircularProgress
                ref={progressCircle}
                size={deviceHeight * 0.2}
                width={3}
                rotation={0}
                fill={0}
                lineCap="round"
                style={{
                    borderRadius: 150,
                    backgroundColor: colors.superPaleGray,
                }}
                tintColor={colors.blue}
                backgroundColor={colors.superPaleGray}>
                {(fill) => (
                    <Touchable onPress={onPress}>
                        <View style={styles.countDownWrapper}>
                            <Text
                                numberOfLines={1}
                                style={[styles.title, constStyles.light]}>
                                {title}
                            </Text>
                            <CountDown
                                until={time}
                                size={20}
                                //  onFinish={() => alert('Finished')}
                                digitStyle={{
                                    backgroundColor: colors.transparent,
                                    width: 30,
                                    overflow: 'visible',
                                    height: 10,
                                }}
                                separatorStyle={{color: colors.blue}}
                                digitTxtStyle={{color: colors.blue}}
                                timeToShow={['M', 'S']}
                                timeLabels={{m: null, s: null}}
                                showSeparator
                            />
                            <Text
                                numberOfLines={1}
                                style={[styles.name, constStyles.medium]}>
                                {name}
                            </Text>
                        </View>
                    </Touchable>
                )}
            </AnimatedCircularProgress>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: deviceHeight * 0.35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countDownWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
    },
    name: {
        fontSize: 15,
        marginTop: -5,
    },
    title: {
        fontSize: 14,
        marginBottom: -10,
    },
});

export default PulseCountDown;
