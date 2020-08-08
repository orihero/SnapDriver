import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {BORDER_RADIUS, CONTAINER_PADDING, deviceWidth} from "@constants/values";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: CONTAINER_PADDING,
    },
    tabWrapper: {
        backgroundColor: colors.blue,
        paddingHorizontal: CONTAINER_PADDING,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        paddingBottom: 14
    },
    topWrapper: {
        backgroundColor: colors.grey,
        alignItems: 'center',
        borderRadius: BORDER_RADIUS,
        padding: 20,
        paddingVertical: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: colors.white
    },
    tabName: {
        fontSize: 14,
    },
    earningWrapper: {
        backgroundColor: colors.grey,
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    earningPrice: {
        color: colors.blue,
        fontSize: 25,
    },
    earningCurrency: {
        color: colors.blue,
        paddingLeft: 10,
        fontSize: 21,
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
        backgroundColor: colors.grey,
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
        paddingBottom: 10,
        backgroundColor: colors.grey,
        borderBottomRightRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
        borderWidth: 2,
        borderColor: colors.white,
        borderTopWidth: 0
    },
    borderBottom: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.paleGray,
    },
    barWrapper: {
        justifyContent: 'space-between',
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    barTitle: {
        fontSize: 14,
        color: colors.darkGrayText,
        paddingRight: 10,
    },
    barData: {fontSize: 15},
    card: {
        padding: CONTAINER_PADDING,
        paddingVertical: 5,
        marginTop: 15,
        backgroundColor: colors.grey,
        borderRadius: BORDER_RADIUS,
        borderWidth: 2,
        borderColor: colors.white,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowTitle: {
        fontSize: 14,
    },
    rowPrice: {
        fontSize: 18,
        color: colors.blue,
    },
    wrapper: {
        marginTop: 40,
        marginBottom: 20,
    },
});
