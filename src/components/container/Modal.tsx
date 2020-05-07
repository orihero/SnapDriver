import React, {useState, ReactNode, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    StyleSheetProperties,
    StyleProp,
} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {deviceWidth, deviceHeight} from '../../constants/values';
import colors from '../../constants/colors';
import constStyles from '../../constants/constStyles';

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
    navigation: NavigationScreenProp<{}>;
    style?: StyleProp<{}>;
}

const Modal = ({isOpen = true, children, navigation, style}: ModalProps) => {
    //functions
    useEffect(() => {
        if (isOpen) {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor(colors.darkTransparent);
        }
    }, [isOpen]);

    //variables
    const [visible, setVisible] = useState(isOpen);
    return (
        <>
            {visible ? (
                <View style={styles.container}>
                    <View style={style}>{children}</View>
                </View>
            ) : (
                <></>
            )}
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: colors.darkTransparent,
        position: 'absolute',
        width: deviceWidth,
        height: deviceHeight,
        zIndex: 100,
    },
});

export default Modal;
