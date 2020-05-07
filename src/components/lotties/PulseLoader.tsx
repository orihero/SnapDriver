import React, {useRef, useState} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Animation from 'lottie-react-native';
import lotties from '../../assets/lotties';
import Touchable from '../common/Touchable';
import colors from '../../constants/colors';

const PulseLoader = () => {
    // const animation = useRef(null);

    return (
        <View style={styles.container}>
            <Animation
                // ref={animation}
                loop={true}
                autoPlay
                speed={0.8}
                autoSize
                style={{flex: 1}}
                source={lotties.lightBeam}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PulseLoader;
