import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions, Animated} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import TariffCard from '../cards/TariffCard';
import MessageCard from '../cards/MessageCard';
import SelectAndInputCard from '../cards/SelectAndInputCard';
import RectangleButton from '../common/RectangleButton';
import {
    deviceWidth,
    CONTAINER_PADDING,
    BORDER_RADIUS,
    BIG_BORDER_RADIUS,
} from '../../constants/values';
// import Animated from 'react-native-reanimated';
import colors from '../../constants/colors';

const height = Dimensions.get('screen').height;

const SwipePanel = ({children, height, top, bottom, drag}) => {
    useEffect(() => {}, []);

    const closePanel = () => {};
    const _panel = useRef(null);
    let _draggedValue = new Animated.Value(0);
    return (
        <SlidingUpPanel
            ref={_panel}
            allowDragging={drag}
            animatedValue={_draggedValue}
            showBackdrop={false}
            allowMomentum={false}
            draggableRange={{top: top, bottom: bottom}}
            containerStyle={[
                styles.container,
                {
                    height: height,
                },
            ]}>
            <View style={[styles.childWrapper]}>{children}</View>
        </SlidingUpPanel>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.transparent,
        margin: 10,

        marginTop: 0,
        borderRadius: BIG_BORDER_RADIUS,
        overflow: 'hidden',
    },
    childWrapper: {
        overflow: 'hidden',
    },
});

export default SwipePanel;
