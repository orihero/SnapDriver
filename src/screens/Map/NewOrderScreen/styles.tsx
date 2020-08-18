import {StyleSheet} from "react-native";
import {BIG_BORDER_RADIUS, CONTAINER_PADDING} from "@constants/values";
import colors from "@constants/colors";

export default StyleSheet.create({
    plane: {
        flex: 1,
    },
    container: {
        paddingHorizontal: CONTAINER_PADDING,
        backgroundColor: colors.grey,
        borderBottomRightRadius: BIG_BORDER_RADIUS,
        borderBottomLeftRadius: BIG_BORDER_RADIUS,
        paddingBottom: 20,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: colors.superPaleGray,
    },
    left: {},
    price: {
        fontSize: 23,
        color: colors.black,
    },
    text: {fontSize: 14},
    distance: {
        fontSize: 18,
        color: colors.darkGrayText,
    },
    rowWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {fontSize: 18},
    location: {
        height: 20,
        width: 14,
        resizeMode: 'contain',
    },
    row: {
        padding: 10,
    },
    tariffWrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    tariffTitle: {
        fontSize: 18,
    },
    tariff: {
        fontSize: 18,
        color: colors.blue,
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'space-between',
        margin: CONTAINER_PADDING,
    },
    countButton: {
        marginTop: 20,
    },
});
