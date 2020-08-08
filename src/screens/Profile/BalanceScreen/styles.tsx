import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {BORDER_RADIUS, CONTAINER_PADDING, deviceWidth} from "@constants/values";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: CONTAINER_PADDING,
        justifyContent: 'space-between',
    },
    topWrapper: {
        backgroundColor: colors.grey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: BORDER_RADIUS,
        padding: 20,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: colors.white,
    },
    textWrapper: {
        flexDirection: 'row',
    },
    buble: {
        position: 'absolute',
        bottom: -14,
        left: (deviceWidth - 63 - 30) / 2,
    },
    text: {
        fontSize: 15
    },
    iconWrapper: {
        borderRadius: 70,
        overflow: 'hidden',
    },
    icon: {
        height: 45,
        width: 45,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cut: {
        position: 'absolute',
        top: -15,
        height: 15,
        width: deviceWidth - 30,
    },
    bottomWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: colors.grey,
        borderBottomRightRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
        borderWidth: 2,
        borderColor: colors.white,
    },
    borderBottom: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.paleGray,
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'center',
    },
    priceTitle: {
        fontSize: 13,
    },
    price: {
        fontSize: 13,
        color: colors.blue,
    },
    fillText: {
        textAlign: 'center',
        paddingBottom: 20,
        fontSize: 14,
    },
    fillTextButton: {
        fontSize: 16,
        color: colors.blue,
    },
});
