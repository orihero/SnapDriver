import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {CONTAINER_PADDING, deviceHeight} from "@constants/values";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: CONTAINER_PADDING,
        flex: 1,
        justifyContent: 'space-between',
    },
    top: {
        padding: 40,
        paddingBottom: 15,
        alignItems: 'center',
    },
    title: {
        paddingVertical: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    logoImage: {
        height: deviceHeight * 0.07,
        width: 185,
        resizeMode: 'contain',
    },
    middle: {
        alignItems: 'center',
    },
    driverImage: {
        height: deviceHeight * 0.24,
        width: 300,
        resizeMode: 'contain',
    },
    bottom: {
        paddingVertical: 20,
    },
    buttonWrapper: {
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    textWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomText: {
        fontSize: 14,
        paddingRight: 20,
    },
    bottomColorText: {
        fontSize: 16,
        color: colors.blue,
    },
});
