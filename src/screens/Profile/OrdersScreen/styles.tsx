import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import {CONTAINER_PADDING} from "@constants/values";

export default StyleSheet.create({
    plane: {
        flex: 1,
        backgroundColor: colors.grey,
    },
    container: {
        flex: 1,
        backgroundColor: colors.grey,
    },
    tabWrapper: {
        backgroundColor: colors.blue,
        paddingHorizontal: CONTAINER_PADDING,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        paddingBottom: 14
    },
    earningDetail: {
        paddingHorizontal: CONTAINER_PADDING,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: colors.superPaleGray,
        borderBottomWidth: 0.5,
        alignItems: 'baseline',
    },
    titleText: {
        color: colors.black,
        fontSize: 14,
    },
    rightText: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    price: {
        fontSize: 18,
        color: colors.blue,
    },
    currency: {
        fontSize: 16,
        color: colors.blue,
    },
    ordersWrapper: {
        paddingTop: 80,
    },
});
