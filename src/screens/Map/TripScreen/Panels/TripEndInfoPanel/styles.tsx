import {StyleSheet} from "react-native";
import colors from "@constants/colors";
import constStyles from "@constants/constStyles";

export default StyleSheet.create({
    hatCutOut: {
        width: '100%',
        height: 15,
    },
    wrapper: {
        backgroundColor: colors.grey,
        padding: 15,
        paddingBottom: 20,
    },
    innerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors.superPaleGray,
        borderBottomWidth: 1,
    },
    costTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cost: {
        ...constStyles.bold,
        fontSize: 23,
        color: colors.blue,
    },
    currency: {
        ...constStyles.light,
        paddingLeft: 10,
        fontSize: 19,
        color: colors.blue,
    },
    durationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors.superPaleGray,
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    text: {
        ...constStyles.bold,
        fontSize: 15
    },
    orderDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors.superPaleGray,
        paddingVertical: 10,
        borderBottomWidth: 1,
    },
})
